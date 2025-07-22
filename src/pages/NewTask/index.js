import firestore from '@react-native-firebase/firestore';
import storange from '@react-native-firebase/storage';
import { useContext, useState } from 'react';
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
  const [task, setTask] = useState('');
  const { user } = useContext(AuthContext);

  async function handleTask() {
    // Verificar se o campo da TASK está vazio;

    if (task === '') {
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
        tast: task,
        autor: user?.name,
        userId: user.uid,
        avatarUrl,
      })
      .then(() => {
        setTask('');
        console.log('Tarefa criada com sucesso!');
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
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.Input}
            maxLength={50}
            autoCorrect={false}
            multiline={true}
            placeholder="Digite uma tarefa..."
            placeholderTextColor={'#dddd'}
          />
          <TouchableOpacity style={styles.ButtonAdd} activeOpacity={0.8} onPress={handleTask}>
            <Icon name="add" size={30} color={'#fff'} />
          </TouchableOpacity>
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
