import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewTask from '../pages/NewTask';
import Profile from '../pages/Profile';
import FinishedTasks from '../pages/FinishedTasks';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppRoutes() {

  function StackHome(){
   return(
     <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
      <Stack.Screen name='NewTask' component={NewTask}/>
    </Stack.Navigator>
   )
  }
  return (
    <Tab.Navigator screenOptions={{
          headerShown:false,
            tabBarHideOnKeyboard:true, // quando aparecer um teclado a tabBar se esconde
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#fff',

            tabBarStyle:{
                backgroundColor:'#12121fff',
                borderTopWidth:0
            }
    }}>
      <Tab.Screen name="StackHome" component={StackHome} />
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="FinishedTask" component={FinishedTasks}/>

     
    </Tab.Navigator>
  );
}

export default AppRoutes;
