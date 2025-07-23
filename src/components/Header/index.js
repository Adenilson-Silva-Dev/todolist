import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>
        My<Text style={{color:'#9B5DE5'}}>Tesks</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderColor:'#dcdcdc',
    backgroundColor: '#1A1A2E',
  },
  Title:{
    fontSize:25,
    color:'#fff',
    fontWeight:'900',
  }
});
export default Header;
