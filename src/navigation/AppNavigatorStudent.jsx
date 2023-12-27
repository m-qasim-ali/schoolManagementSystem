import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddStudent,
  ExamRoutineStudent,
  Home,
  HomeWorkList,
  ResultStudent,
  StudentAttendance,
  StudentDashboard,
  StudentNoticeEvents,
  TeacherDashboard,
  ViewAssignment,
  ViewNotice,
} from '../screens';
import {Image, StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();

export default AppNavigatorStudent = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen
      name="StudentDashboard"
      component={StudentDashboard}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="StudentAttendance"
      component={StudentAttendance}
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
      name="ExamRoutineStudent"
      component={ExamRoutineStudent}
      options={{
        title: 'EXAM ROUTINE',
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
      name="StudentNoticeEvents"
      component={StudentNoticeEvents}
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
      name="HomeWorkList"
      component={HomeWorkList}
      options={{
        title: 'ASSIGNMENTS',
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
      name="ViewAssignment"
      component={ViewAssignment}
      options={{
        title: 'ASSIGNMENT VIEW',
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
      name="ResultStudent"
      component={ResultStudent}
      options={{
        title: 'RESULT',
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
      name="ViewNotice"
      component={ViewNotice}
      options={{
        title: 'NOTICE AND EVENTS VIEW',
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
  </Stack.Navigator>
);

const Styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});
