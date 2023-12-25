import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Main from './src/Components/Main/Main';
import SelctionRole from './src/Components/SelctionScreen/SelctionRole';
import Login from './src/Components/Login/Login';
import SignUp from './src/Components/SignUp/SignUp';
import TeacherDashboard from './src/Components/TeacherDashboard/TeacherDashboard';
import AddStudent from './src/Components/AddStudent/AddStudent';
import MyDrawer from './src/Components/myDrawer/myDrawer';
import ResultDescription from './src/Components/resultDescription/result_description';
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
        <Stack.Screen
          name="Drawer"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StudentRESULT"
          component={ResultDescription}
          options={{
            headerShown: false,
           }}
        />


        <Stack.Screen
          name="HomeWorkScreen"
          component={HomeWorkScreen}
          options={{
            title: 'Home Screen',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/homeIcon.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{
            title: 'RESULT',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/Exam.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{
            title: 'ATTENDANCE',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/Exam.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="AddMarksScreen"
          component={AddMarksScreen}
          options={{
            title: 'ADD MARKS',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/Exam.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="NoticeAndEventsScreen"
          component={NoticeAndEvent}
          options={{
            title: 'NOTICE AND EVENTS',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/Questions.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="SolutionsScreen"
          component={SolutionsScreen}
          options={{
            title: 'SOLUTIONS',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/solutions.png')} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#0C46C4',
            },

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            },

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default App;

