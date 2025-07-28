import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { signOut, user } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }
  return (
    <View style={styles.Container}>
      <Header />
      <TouchableOpacity style={styles.ButtonAvatar} activeOpacity={.7}>
        <Icon name="person" size={150} color={'#9B5DE5'}/>
      </TouchableOpacity>

      <Text numberOfLines={1} style={styles.name}>
        {user?.name}
      </Text>
      <Text numberOfLines={1} style={styles.email}>
        {user?.email}
      </Text>
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
    borderRadius: 4,
    marginTop: 18,
    borderColor: '#9B5DE5',
  },
  TextButton: {
    color: '#fff',
    fontSize: 20,
  },
  ButtonAvatar:{
    width:200,
    height:200,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'#9B5DE5',
    borderRadius:200 * 10,
    marginTop:24,
    marginBottom:8,
    backgroundColor:'#fff'
  },
  Avatar: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: '#9B5DE5',
    marginBottom: 18,
    marginTop: 18,
    borderRadius: 250 * 100,
  },

  name: {
    width: '40%',
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  },
  email: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#fff',
  },
});
export default Profile;
