import { StyleSheet, Text, View } from 'react-native';

function NewTask() {
  return (
    <View style={styles.Container}>
      <Text>Tela NewTask</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#1A1A2E'
  }
})
export default NewTask;
