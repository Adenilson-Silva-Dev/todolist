import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
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
    backgroundColor: 'rgba(155, 93, 229, 0.6)',
  },
});
export default Home;
