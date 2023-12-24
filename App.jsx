// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View style={Styles.parentView}>
      <View style={Styles.questionDescriptionSection}>
        <Text style={Styles.questionTittle}>
          Home Work Description Text Here
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          ducimus reprehenderit asperiores. Corporis, voluptatibus. Tenetur
          perferendis quaerat voluptatibus, cupiditate inventore quasi aperiam
          laudantium dolores quis praesentium tempore itaque omnis reiciendis,
          ad repudiandae.
        </Text>
      </View>

      <View style={Styles.questionMaterialSection}>
        <Text>Related Description text Here</Text>
      </View>
    </View>
  );
}

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
                <Image source={require('./assets/images/homeIcon.png')}></Image>
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
  parentView: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  questionDescriptionSection: {
    flex: 1,
    justifyContent: 'center',
  },
  questionMaterialSection: {
    flex: 2,
  },
  questionTittle: {
    fontWeight: '900',
    fontSize: 15,
    color: 'black',
  },
});

export default App;
