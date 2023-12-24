import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeWorkScreen from './components/HomeWorkScreen';
import {StyleSheet, View, Image} from 'react-native';
import ResultScreen from './components/ResultScreen';
import AttendanceScreen from './components/AttendanceScreen';

import AddMarksScreen from './components/AddMarksScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AttendanceScreen">
        <Stack.Screen
          name="HomeWorkScreen"
          component={HomeWorkScreen}
          options={{
            title: 'Home Screen',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/homeIcon.png')} />
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
          name="ResultScreen"
          component={ResultScreen}
          options={{
            title: 'RESULT',
            headerLeft: () => (
              <View style={Styles.headerLeftContainer}>
                <Image source={require('./assets/images/Exam.png')} />
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
                <Image source={require('./assets/images/Exam.png')} />
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
                <Image source={require('./assets/images/Exam.png')} />
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
