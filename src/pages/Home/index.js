import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import ListTasks from '../../components/ListTasks';
import { AuthContext } from '../../contexts/auth';

function Home() {
  const { user,inputTask,setInputTask, isEditingTask, setIsEditingTask} = useContext(AuthContext);
  const [task, setTask] = useState([]);

  const navigation = useNavigation();

  //Exibir tarefas na tela
  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      async function fetchTasks() {
        if (isActive) {
          setTask([]);
          const taskList = [];

          await firestore()
            .collection('tasks')
            .orderBy('createdAt', 'desc')
            .limit(50)
            .get()
            .then((snapshot) => {
              snapshot.docs.map((t) => {
                taskList.push({
                  ...t.data(),
                  id: t.id,
                });
              });
            });
          setTask(taskList);
        }
      }

      fetchTasks();
      return () => {
        isActive = false;
      };
    }, [])
  );

  async function completeTask(item) {
    console.log(item);
    await firestore()
      .collection('finishedTask')
      .add({
        finishedAt: new Date(),
        title: item.task,
        autor: user?.name,
        userId: user?.uid,
      })
      .then(() => {
        console.log('Task finalizada com sucesso!');
      })
      .catch((error) => {
        console.log('Error ao finalizar task ', error);
      });
  }

   function updateTask(data) {
    
    setInputTask(data.task)
    setIsEditingTask(data.id)
    navigation.navigate('NewTask')
  
  }

 
  async function deleteTask(idTask) {
    try {
      await firestore().collection('tasks').doc(idTask).delete();
      setTask((valueTask) => valueTask.filter((task) => task.id != idTask));
      console.log(idTask);
    } catch (err) {
      console.log('Error ao deletar tarefas');
    }
  }
  return (
    <View style={styles.Container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => (
          <ListTasks
            data={item}
            finishedTask={() => completeTask(item)}
            deleteTask={() => deleteTask(item.id)}
            editTask={() => updateTask(item)}
          />
        )}
      />
      <TouchableOpacity style={styles.ButtonPlus} onPress={() => navigation.navigate('NewTask')}>
        <Icon name="plus" size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  ButtonPlus: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: '5%',
    borderRadius: '100%',
    zIndex: 99,
    backgroundColor: '#9B5DE5',
  },
});
export default Home;
