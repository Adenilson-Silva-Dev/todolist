import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LogIn() {
  const [login, setLogin] = useState(true);

  function toggleLogin() {
    setLogin(!login);
  }

  if (login) {
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
          My<Text style={{ color: '#9B5DE5', fontStyle: 'italic' }}>Tasks</Text>
        </Text>
        <TextInput
          style={styles.Input}
          placeholder="Seu email..."
          placeholderTextColor={'#dcdcdc'}
        />
        <TextInput
          style={styles.Input}
          placeholder="Sua senha..."
          placeholderTextColor={'#dcdcdc'}
        />
        <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
          <Text style={{ fontSize: 18, color: '#fff' }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonLink} activeOpacity={0.6} onPress={toggleLogin}>
          <Text style={styles.TextLink}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>
        My<Text style={{ color: '#9B5DE5', fontStyle: 'italic' }}>Tasks</Text>
      </Text>
      <TextInput style={styles.Input} placeholder="Seu nome..." placeholderTextColor={'#dcdcdc'} />
      <TextInput style={styles.Input} placeholder="test@test.com" placeholderTextColor={'#dcdcdc'} />
      <TextInput style={styles.Input} placeholder="************" placeholderTextColor={'#dcdcdc'} secureTextEntry={true} />
      <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
        <Text style={{ fontSize: 18, color: '#fff' }}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonLink} activeOpacity={0.6} onPress={toggleLogin}>
        <Text style={styles.TextLink}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A2E',
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  Input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 4,
    marginTop: 18,
    color: '#FFFFFF',
    borderColor: '#9B5DE5',
  },
  Button: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: '#9B5DE5',
  },
  ButtonLink: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  TextLink: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
  },
});
export default LogIn;
