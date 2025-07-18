import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
      <StatusBar backgroundColor ={'#1A1A2E'}barStyle={'light-content'} translucent={true} />
      <SafeAreaView style={{flex:1}}>
      <Routes />

      </SafeAreaView>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
