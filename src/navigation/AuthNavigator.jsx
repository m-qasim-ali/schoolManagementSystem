import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp, Main, SelectionRole, ForgetPassword} from '../screens';

const Stack = createStackNavigator();

export default AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen
      name="SelectionRole"
      component={SelectionRole}
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
      name="ForgetPassword"
      component={ForgetPassword}
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
    {/* <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
  </Stack.Navigator>
);
