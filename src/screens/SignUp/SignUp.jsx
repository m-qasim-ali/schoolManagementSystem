import {useState} from 'react';
import myStyle from './Style';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Auth} from '../../services';

const SignUp = props => {
  const {role: Role} = props.route.params;
  const [role, setRole] = useState(Role);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [cls, setCls] = useState('4');

  const handleSubmit = async () => {
    if (username.length == 0 || password.length == 0 || email.length == 0) {
      Alert.alert('Required', 'All fields are required!');
    } else {
      setLoading(true);
      console.log(username);
      if (role == 'teacher') {
        await Auth.registerTeacher(username, email, password, cls);
      } else {
        await Auth.registerGuest(username, email, password);
      }
      setLoading(false);
      props.navigation.navigate('Login', {role: role});
    }
  };

  const [show, setShow] = useState(true);
  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}>
          <Image
            style={myStyle.Image}
            source={require('./../../../Assests/images/MainLogo.png')}
          />
        </View>
      </View>
      <View style={myStyle.View2}>
        <ScrollView>
          <View style={myStyle.View}>
            <RadioButton.Item
              label="Teacher"
              value="teacher"
              status={role === 'teacher' ? 'checked' : 'unchecked'}
              onPress={() => setRole('teacher')}
            />
            <RadioButton.Item
              label="Guest"
              value="guest"
              status={role === 'guest' ? 'checked' : 'unchecked'}
              onPress={() => setRole('guest')}
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
                <Icon name="user" size={25} color="#0C46C4" />
              </View>
            </View>
            <View>
              <Text style={myStyle.text}>Enter Email</Text>
              <View style={myStyle.View2_1_1}>
                <TextInput
                  style={myStyle.Textinput}
                  placeholder="xyz@gmail.com"
                  onChangeText={text => setEmail(text)}></TextInput>
                <Icon name="envelope" size={25} color="#0C46C4" />
              </View>
            </View>
            <View>
              <Text style={myStyle.text}>Enter Password</Text>
              <View style={myStyle.View2_1_1}>
                <TextInput
                  style={myStyle.Textinput}
                  placeholder="***************"
                  secureTextEntry={show}
                  onChangeText={text => setPassword(text)}></TextInput>
                <Icon
                  name={show == true ? 'eye' : 'eye-slash'}
                  size={25}
                  color="#0C46C4"
                  onPress={() => setShow(!show)}
                />
              </View>
            </View>
            {role == 'teacher' && (
              <View>
                <Text style={myStyle.text}>Enter Class</Text>
                <View style={myStyle.View2_1_1}>
                  <TextInput
                    style={myStyle.Textinput}
                    placeholder="3"
                    onChangeText={text => setCls(text)}></TextInput>
                  <Icon name="puzzle-piece" size={25} color="#0C46C4" />
                </View>
              </View>
            )}
            <View style={myStyle.View2_2}>
              <TouchableOpacity
                disabled={loading}
                style={myStyle.touchable1}
                onPress={handleSubmit}>
                <Text style={myStyle.touchable1Text}>
                  {loading ? 'Registering...' : 'Register'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignUp;

// props.navigation.navigate('Login', {role: 'teacher'})
