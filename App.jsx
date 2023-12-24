import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeWorkScreen';
import {StyleSheet, View, Image} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOMEWORK"
          component={HomeScreen}
          options={{
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
