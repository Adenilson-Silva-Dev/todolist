import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorange() {
      const userStorange = await AsyncStorage.getItem('@mytask');
      if (userStorange) {
        setUser(JSON.parse(userStorange));
      }
    }

    loadStorange();
  }, []);
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
              storangeUser(data);
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
          storangeUser(data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('@mytask');
      setUser(null);
    } catch (err) {
      console.log('Erro ao sair', err);
    }
  }
  async function storangeUser(data) {
    await AsyncStorage.setItem('@mytask', JSON.stringify(data));
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, sigIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
