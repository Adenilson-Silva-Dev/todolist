import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
   await signOut();
  }
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={handleSignOut}>
        <Text style={styles.TextButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },

  Button: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9B5DE5',
    borderRadius: 4,
  },
  TextButton: {
    color: '#fff',
    fontSize: 20,
  },
});
export default Profile;
