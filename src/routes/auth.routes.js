import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../pages/LogIn';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
