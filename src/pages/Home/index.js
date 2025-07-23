import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListTasks from '../../components/ListTasks';

function Home() {
 const [post, setPost] = useState([
  { id: '1', task: 'Estudar Java' },
  { id: '2', task: 'Estudar React Native' },
  { id: '3', task: 'Praticar algoritmos e lógica' },
  { id: '4', task: 'Fazer um app simples com CRUD' },
  { id: '5', task: 'Estudar banco de dados (SQLite ou Firebase)' },
  { id: '6', task: 'Aprender Git e GitHub' },
  { id: '7', task: 'Assistir uma aula sobre API REST' },
  { id: '8', task: 'Implementar autenticação no app' },
  { id: '9', task: 'Melhorar o design usando StyleSheet' },
  { id: '10', task: 'Publicar um projeto no GitHub' },
]);

  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Header/>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={post}
      renderItem={({item})=> <ListTasks data={item}/>}
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
