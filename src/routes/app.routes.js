import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
