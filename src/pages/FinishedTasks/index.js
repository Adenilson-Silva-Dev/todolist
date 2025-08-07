import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import FinishedList from '../../components/finishedList';
import firestore from "@react-native-firebase/firestore"
import { AuthContext } from '../../contexts/auth';

function FinishedTasks() {
  const [task, setTask] = useState([]);
  const {user} = useContext(AuthContext)

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = firestore().collection('finishedTask').where('userId', '==',user.uid)
      .orderBy('finishedAt','desc').limit(100)
      .onSnapshot((snapshot)=>{
        const finishedTask = snapshot.docs.map((doc)=> ({
          ...doc.data(),
          id:doc.id
        }))

        setTask(finishedTask)
      },(err)=>{
        console.log('Erro ao buscar tarefas finalizadas ', err)
      }
    )
    return ()=> unsubscribe()
    }, [user.uid])
  );
  return (
    <View style={styles.Container}>
      <Header />
      <FlatList data={task} renderItem={({ item }) => <FinishedList data={item} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
});
export default FinishedTasks;
