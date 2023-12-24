import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';

// import navigators
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

// firebase auth
import auth from '@react-native-firebase/auth';
import {Text, View} from 'react-native';
import {selectUser} from '../store/userSlice';
import {useSelector} from 'react-redux';

export default AppContainer = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const data = useSelector(selectUser);

  function onAuthStateChanged(user) {
    setUser(data);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [data]);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
