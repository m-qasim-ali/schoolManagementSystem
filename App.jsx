// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  const [homeWork, setHomeWork] = React.useState('');
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
        <Text style={Styles.subjectText}>Subject Name Here</Text>

        <View>
          <Text>Add Homework</Text>

          <TextInput
            style={Styles.homeWorkInputFiled}
            onChangeText={setHomeWork}></TextInput>
        </View>

        <TouchableOpacity
          style={Styles.submitButtonOpacity}
          onPress={() => {
            console.log(homeWork);
          }}>
          <Text style={Styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <Text style={Styles.fileStatuesText}>File is Uploaded sucessfully</Text>
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
    flex: 2,
    justifyContent: 'center',
  },
  questionMaterialSection: {
    flex: 3,
    gap: 40,
  },
  questionTittle: {
    fontWeight: '900',
    fontSize: 15,
    color: 'black',
  },
  subjectText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
  submitButtonOpacity: {
    alignSelf: 'center',
    backgroundColor: '#0C46C4',
    width: '80%',
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
  homeWorkInputFiled: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  fileStatuesText: {
    textAlign: 'center',
  },
});

export default App;
