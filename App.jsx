import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Main from './Components/Main/Main';
import SelctionRole from './Components/SelctionScreen/SelctionRole';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={SelctionRole}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
