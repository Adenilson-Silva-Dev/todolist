import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';

function ListTasks({ data, finishedTask }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.Container}>
      <View style={styles.AreaTask}>
        <Text numberOfLines={2} style={styles.TitleTask}>
          {data.task}
        </Text>
        <View style={styles.AreaIcons}>
          <TouchableOpacity style={styles.ButtonIcon} onPress={finishedTask}>
            <Icon name="square" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonIcon} onPress={finishedTask}>
            <Icon name="edit-3" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonIcon}>
            <Icon name="trash-2" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginBottom: 8,
    margin: 8,
    borderRadius: 10,

    backgroundColor: '#fff',
  },
  AreaTask: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftColor: '#9B5DE5',
    borderRadius: 10,
    borderLeftWidth: 7,
  },
  TitleTask: {
    width: '70%',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700',
    left: 8,
  },
  AreaIcons: {
    width: '30%',
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ButtonIcon: {
    flexDirection: 'row',
  },
});
export default ListTasks;
