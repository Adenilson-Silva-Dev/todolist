import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'

function Home() {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ButtonPlus}>
          <Icon name='plus' size={30} color={'#fff'}/>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  Container:{
    flex:1,
   backgroundColor:'#1A1A2E'

  },
  ButtonPlus:{
    width:70,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:10,
    right:'5%',
    borderRadius:'100%',
    backgroundColor: 'rgba(155, 93, 229, 0.6)'
  }
})
export default Home;
