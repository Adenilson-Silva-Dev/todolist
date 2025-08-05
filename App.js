import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';
import TaskProvider from './src/contexts/taskContext';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <TaskProvider>
          <NavigationContainer>
          <StatusBar backgroundColor={'#1A1A2E'} barStyle={'light-content'}/>
          <Routes />
        </NavigationContainer>
        </TaskProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
