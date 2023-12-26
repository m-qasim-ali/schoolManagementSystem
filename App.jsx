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
import ResultDescription from './src/Components/StudentResult/studentResult';
import { StyleSheet ,Image,View,Text} from 'react-native';
import HomeWorkScreen from './src/Components/HomeWorkScreen/HomeWorkScreen';

import AttendanceScreen from './src/Components/AttendanceScreen/AttendanceScreen';
import AddMarksScreen from './src/Components/AddMarksScreen/AddMarksScreen';
import NoticeAndEvent from './src/Components/NoticeAttendence/NoticeAndEvents';
import SolutionsScreen from './src/Components/SolutionScreen/SolutionsScreen';
import AskQuestion from './src/Components/AskQuestions/ask_questions';
import QuestionList from './src/Components/QuestionList/questionList';
import AnswerScreen from './src/Components/AnswerScreen/answerScreen';
import StudentRESULT from './src/Components/StudentResult/studentResult';

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
          component={StudentRESULT}
          options={{
            title: 'Result Screen',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./src/Assests/Images/ExamW.png')} />
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
          name="HomeWorkScreen"
          component={HomeWorkScreen}
          options={{
            title: 'Home Screen',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./src/Assests/Images/homeIcon.png')} />
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
                <Image source={require('./src/Assests/Images/ExamW.png')} />
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
                <Image source={require('./src/Assests/Images/ExamW.png')} />
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
          name="QuestionList"
          component={QuestionList}
          options={{
            title: 'Question List',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./src/Assests/Images//ExamW.png')} />
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
          name="AnswerScreen"
          component={AnswerScreen}
          options={{
            title: 'Answer Of Question',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./src/Assests/Images/ExamW.png')} />
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
          name="AskQuestion"
          component={AskQuestion}
          options={{
            title: 'Ask Question',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image
                  source={require('./src/Assests/Images/QuestionsW.png')}
                />
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
                <Image
                  source={require('./src/Assests/Images/QuestionsW.png')}
                />
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
                <Image
                  source={require('./src/Assests/Images//solutions.png')}
                />
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
          name="addStudent"
          component={AddStudent}
          options={{
            headerShown: false,
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

