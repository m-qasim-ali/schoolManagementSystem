import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddMarks,
  AddStudent,
  ExamRoutineTeacher,
  Home,
  HomeWorkTeacher,
  NoticeAndEvents,
  SolutionsTeacher,
  TeacherAttendance,
  TeacherDashboard,
} from '../screens';
import {Image, StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();

export default AppNavigatorTeacher = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen
      name="TeacherDashboard"
      component={TeacherDashboard}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TeacherAttendance"
      component={TeacherAttendance}
      options={{
        title: 'ATTENDANCE',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/ExamW.png')} />
          </View>
        ),
        headerShown: true,
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
      name="AddMarks"
      component={AddMarks}
      options={{
        title: 'ADD MARKS',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/ExamW.png')} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0C46C4',
        },
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
      }}
    />

    <Stack.Screen
      name="ExamRoutineTeacher"
      component={ExamRoutineTeacher}
      options={{
        title: 'Exam Routine',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/ExamW.png')} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0C46C4',
        },
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
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
      name="NoticeAndEvents"
      component={NoticeAndEvents}
      options={{
        title: 'NOTICE AND EVENTS',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/QuestionsW.png')} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0C46C4',
        },
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
      }}
    />

    <Stack.Screen
      name="SolutionsTeacher"
      component={SolutionsTeacher}
      options={{
        title: 'SOLUTIONS',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/solutions.png')} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0C46C4',
        },
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
      }}
    />

    <Stack.Screen
      name="HomeWorkTeacher"
      component={HomeWorkTeacher}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <View style={Styles.headerLeftContainer}>
            <Image source={require('../../Assests/images/homeIcon.png')} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0C46C4',
        },
        headerShown: true,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
      }}
    />

    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});
