import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddStudent, Home, StudentDashboard, TeacherDashboard} from '../screens';

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
  </Stack.Navigator>
);
