import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import navigators
import AppNavigatorTeacher from './AppNavigatorTeacher';
import AppNavigatorStudent from './AppNavigatorStudent';
import AppNavigatorGuest from './AppNavigatorGuest';
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
      {!user ? (
        <AuthNavigator />
      ) : user.role == 'teacher' ? (
        <AppNavigatorTeacher />
      ) : user.role == 'student' ? (
        <AppNavigatorStudent />
      ) : (
        <AppNavigatorGuest />
      )}
    </NavigationContainer>
  );
};
