import { StyleSheet, Text, View } from 'react-native';

function FinishedList({data}) {
  return (
    <View style={styles.Container}>
      <View style={styles.AreaTask}>
        <Text style={styles.Title}>{data.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  AreaTask: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftColor: '#9B5DE5',
    borderRadius: 10,
    paddingLeft: 8,
    borderLeftWidth: 7,
  },
  Title: {
    fontSize: 20,
    textDecorationLine:'line-through',
  },
});
export default FinishedList;
