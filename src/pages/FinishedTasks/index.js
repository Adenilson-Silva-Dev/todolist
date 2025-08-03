import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import FinishedList from '../../components/finishedList';

function FinishedTasks() {
  const [task, setTask] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchFinished() {
        const listFinished = [];
        await firestore()
          .collection('finishedTask')
          .orderBy('finishedAt', 'desc')
          .limit(50)
          .get()
          .then((snapshot) => {
            snapshot.docs.map((t) => {
              listFinished.push({
                ...t.data(),
                id: t.id,
              });
              setTask(listFinished);
            });
          });
      }
      fetchFinished();
    }, [])
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
