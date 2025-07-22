import { useContext, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '../../contexts/auth';

function LogIn() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, sigIn, loading } = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
  }

  async function handleSignUp() {
    if (email === '' || password === '' || name === '') return;
    await signUp(email, password, name);
  }

  async function handelSigIn() {
    if (email === '' || password === '') return;
    await sigIn(email, password);
  }
  if (login) {
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>
          My<Text style={{ color: '#9B5DE5', fontStyle: 'italic' }}>Tasks</Text>
        </Text>
        <TextInput
          value={email}
          onChangeText={(value) => setEmail(value)}
          onSubmitEditing={handelSigIn}
          returnKeyType="done"
          style={styles.Input}
          placeholder="Seu email..."
          placeholderTextColor={'#dcdcdc'}
        />
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          onSubmitEditing={handelSigIn}
          returnKeyType="done"
          style={styles.Input}
          placeholder="Sua senha..."
          placeholderTextColor={'#dcdcdc'}
        />

        {loading ? (
          <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={handelSigIn}>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={handelSigIn}>
            <Text style={{ fontSize: 18, color: '#fff' }}>Login</Text>
          </TouchableOpacity>
        )}

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
      <TextInput
        value={name}
        onChangeText={(value) => setName(value)}
        style={styles.Input}
        placeholder="Seu nome..."
        placeholderTextColor={'#dcdcdc'}
      />
      <TextInput
        value={email}
        onChangeText={(value) => setEmail(value)}
        style={styles.Input}
        placeholder="test@test.com"
        placeholderTextColor={'#dcdcdc'}
      />
      <TextInput
        value={password}
        onChangeText={(value) => setPassword(value)}
        style={styles.Input}
        placeholder="************"
        placeholderTextColor={'#dcdcdc'}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={handleSignUp}>
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
