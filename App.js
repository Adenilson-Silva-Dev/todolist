import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={'#1A1A2E'} barStyle={'light-content'}/>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
