import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor ={'#1A1A2E'}barStyle={'light-content'} translucent={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
