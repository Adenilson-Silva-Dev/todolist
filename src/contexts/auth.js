import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState('')

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
    setLoading(true);
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
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log('Error ao cadastrar usuario!', err);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }

  async function sigIn(email, password) {
    setLoading(true);
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
          setLoading(false);
        });
    } catch (err) {
      console.log('Error ao logar usuário! ', err);
      setLoading(false)
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('@mytask');
      setUser(null);
    } catch (err) {
      console.log('Erro ao sair da conta!', err);
    }
  }
  async function storangeUser(data) {
    await AsyncStorage.setItem('@mytask', JSON.stringify(data));
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, sigIn, signOut, loading,task, setTask }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
