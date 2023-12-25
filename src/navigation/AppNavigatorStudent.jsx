import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddStudent, Home, TeacherDashboard} from '../screens';

const Stack = createStackNavigator();

export default AppNavigatorStudent = () => (
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
  </Stack.Navigator>
);
