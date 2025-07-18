import { Text, View,StyleSheet } from 'react-native';

function Profile() {
  return (
    <View style={styles.Container}>
      <Text>Tela Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#1A1A2E'
  }
})
export default Profile;
