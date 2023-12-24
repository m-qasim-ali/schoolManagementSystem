import {useState} from 'react';
import myStyle from './Style';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const {role} = props.route.params;
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
        <View style={myStyle.View2_1}>
          <View>
            <Text>Enter Email</Text>
            <View style={myStyle.View2_1_1}>
              <TextInput
                style={myStyle.Textinput}
                placeholder="...@xyz.com"
                onChangeText={text => setEmail(text)}></TextInput>
              <Icon name="user" size={30} color="#0C46C4" />
            </View>
          </View>
          <View>
            <Text>Enter Password</Text>
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
        </View>
        <View style={myStyle.View2_2}>
          <TouchableOpacity style={myStyle.touchable1}>
            <Text style={myStyle.touchable1Text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={myStyle.touchable2_1Text}>Forget Password</Text>
          </TouchableOpacity>
          {role == 'teacher' || role == 'guest' ? (
            <View style={myStyle.View_2_2_1}>
              <Text style={{fontSize: 14, top: 2}}>Don't Have an Account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={myStyle.touchable2_2Text}>SignUp</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default Login;
