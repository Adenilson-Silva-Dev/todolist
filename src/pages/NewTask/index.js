import firestore from '@react-native-firebase/firestore';
import storange from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../contexts/auth';
function NewTask() {
  const { user, inputTask, setInputTask,isEditingTask, handleUpdateTask } = useContext(AuthContext);
  const navigation = useNavigation();

  async function handleTask() {
    // Verificar se o campo da TASK está vazio;

    if (inputTask === '') {
      alert('Favor inserir uma tarefa!');
      return;
    }

    let avatarUrl = null;

    try {
      let response = await storange().ref('users').child(user?.uid).getDownloadURL();
      avatarUrl = response;
    } catch (error) {
      avatarUrl = null;
    }

    await firestore()
      .collection('tasks')
      .add({
        createdAt: new Date(),
        task: inputTask,
        autor: user?.name,
        userId: user.uid,
        avatarUrl,
      })
      .then(() => {
        setInputTask('');
        console.log('Tarefa criada com sucesso!');
        navigation.goBack();
      })
      .catch((err) => {
        console.log('Error ao criar tarefas! ', err);
      });
  }
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <View style={styles.AreaInput}>
          <TextInput
            value={inputTask}
            onChangeText={(text) => setInputTask(text)}
            style={styles.Input}
            placeholder="Digite uma tarefa..."
            placeholderTextColor={'#dddd'}
          />
          {isEditingTask !== '' ? (
            <TouchableOpacity style={styles.ButtonAdd} activeOpacity={0.8} onPress={()=>handleUpdateTask() & navigation.navigate("Home")} >
            <Icon name="check" size={30} color={'#fff'} />
          </TouchableOpacity>
          ):(
            <TouchableOpacity style={styles.ButtonAdd} activeOpacity={0.8} onPress={handleTask}>
            <Icon name="add" size={30} color={'#fff'} />
          </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1A1A2E',
  },
  AreaInput: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Input: {
    width: '80%',
    height: 60,
    fontSize: 22,
    left: 8,
    borderWidth: 0.5,
    borderColor: '#ddd',
    color: '#fff',
  },
  ButtonAdd: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    right: '2%',
    backgroundColor: 'rgba(155, 93, 229, 0.6)',
  },
});
export default NewTask;
