import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, TeacherDashboard} from '../screens';

const Stack = createStackNavigator();

export default AppNavigator = () => (
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
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
