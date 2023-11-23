// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base'
import { Login } from './src/pages/Login'

export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}
