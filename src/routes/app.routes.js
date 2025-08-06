import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FinishedTasks from '../pages/FinishedTasks';
import Home from '../pages/Home';
import NewTask from '../pages/NewTask';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppRoutes() {
  function StackHome() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1A2E',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ title: 'Adicionar tarefas' }} name="NewTask" component={NewTask} />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, // quando aparecer um teclado a tabBar se esconde
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'rgba(117, 4, 255, 0.9)',

        tabBarStyle: {
          backgroundColor: '#070407ff',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Icon name="assignment" size={size} color={color} />;
          },
        }}
        name="FinishedTask"
        component={FinishedTasks}
      />
      <Tab.Screen
        options={{
          
          tabBarIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color} />;
          },

          tabBarIconStyle:{
            width:50,
            height:50,
            top:-15,
            borderRadius:100,
            backgroundColor:'#fff'
          }
        }}
        name="StackHome"
        component={StackHome}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Icon name="person" size={size} color={color} />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
