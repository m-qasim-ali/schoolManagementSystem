import React from 'react';
import {Auth} from '../../services';
import {Pressable, Text, Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Add your logout logic here
    // For example, you might dispatch a logout action, clear user data, etc.
    // For the sake of this example, we'll show an alert.
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        onPress: async () => {
          try {
            await Auth.signOut();
            dispatch(setUser(null));
          } catch (err) {
            Alert.alert('Error', err.message);
          }
        },
      },
    ]);
  };
  return (
    <View>
      <Text>Home Page</Text>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(0, 0, 0, 0.4)' : '#000',
            padding: 10,
            borderRadius: 5,
          },
        ]}
        onPress={handleLogout}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
