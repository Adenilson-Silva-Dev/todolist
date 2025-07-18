import { Text, View,StyleSheet} from 'react-native';

function FinishedTasks() {
  return (
    <View style={styles.Container}>
      <Text>Tela FinishedTasks</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#1A1A2E'
  }
})
export default FinishedTasks;
