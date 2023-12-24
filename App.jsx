import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Main from './src/Components/Main/Main';
import SelctionRole from './src/Components/SelctionScreen/SelctionRole';
import Login from './src/Components/Login/Login';
import SignUp from './src/Components/SignUp/SignUp';
import TeacherDashboard from './src/Components/TeacherDashboard/TeacherDashboard';
import AddStudent from './src/Components/AddStudent/AddStudent';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#28C2A0'} />
      <Stack.Navigator initialRouteName="Main">
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
        <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
