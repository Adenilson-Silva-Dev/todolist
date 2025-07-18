import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function signUp(email, password, name) {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;
          await firestore()
            .collection('users')
            .doc(uid)
            .set({
              name: name,
              createdAt: new Date(),
            })
            .then(() => {
              let data = {
                uid: uid,
                name: name,
                email: value.user.email,
              };

              setUser(data);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function sigIn(email, password) {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;
          const userProfile = await firestore().collection('users').doc(uid).get();

          let data = {
            uid: uid,
            name: userProfile.data().name,
            email: value.user.email,
          };

          setUser(data);
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp,sigIn }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
