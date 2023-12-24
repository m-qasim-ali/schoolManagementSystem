import {useState} from 'react';
import myStyle from './Style';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const SignUp = props => {
  const [checked, setChecked] = useState('teacher');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = value => {
    setChecked(value);
  };

  const [show, setShow] = useState(true);
  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}>
          <Image
            style={myStyle.Image}
            source={require('../../Assests/Images/MainLogo.png')}
          />
        </View>
      </View>
      <View style={myStyle.View2}>
        <View style={myStyle.View}>
          <RadioButton.Item
            label="Teacher"
            value="teacher"
            status={checked === 'teacher' ? 'checked' : 'unchecked'}
            onPress={() => handlePress('teacher')}
          />
          <RadioButton.Item
            label="Guest"
            value="guest"
            status={checked === 'guest' ? 'checked' : 'unchecked'}
            onPress={() => handlePress('guest')}
          />
        </View>
        <View style={myStyle.View2_1}>
          <View>
            <Text style={myStyle.text}>Enter Username</Text>
            <View style={myStyle.View2_1_1}>
              <TextInput
                style={myStyle.Textinput}
                placeholder="Sameem Amjad"
                onChangeText={text => setUserName(text)}></TextInput>
              <Icon name="user" size={30} color="#0C46C4" />
            </View>
          </View>
          <View>
            <Text style={myStyle.text}>Enter Username</Text>
            <View style={myStyle.View2_1_1}>
              <TextInput
                style={myStyle.Textinput}
                placeholder="***************"
                secureTextEntry={show}
                onChangeText={text => setPassword(text)}></TextInput>
              <Icon
                name={show == true ? 'eye' : 'eye-slash'}
                size={30}
                color="#0C46C4"
                onPress={() => setShow(!show)}
              />
            </View>
          </View>
          <View style={myStyle.View2_2}>
            <TouchableOpacity
              style={myStyle.touchable1}
              onPress={() =>
                props.navigation.navigate('Login', {role: 'teacher'})
              }>
              <Text style={myStyle.touchable1Text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignUp;
