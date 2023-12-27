import {useState} from 'react';
import myStyle from './Style';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Auth} from '../../services';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/userSlice';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const {role} = props.route.params;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submit = async () => {
    try {
      if (email.length === 0 || password.length === 0) {
        Alert.alert('Required', 'All fields are required!');
      } else {
        setLoading(true);
        let data = null;
        if (props.route.params.role === 'guest') {
          data = await Auth.signInGuest(email, password);
        } else if (props.route.params.role === 'student') {
          data = await Auth.signInStudent(email, password);
        } else {
          data = await Auth.signInTeacher(email, password);
        }
        // Only show the "success" alert box if the login is successful
        dispatch(setUser(data));
        setLoading(false);
      }
    } catch (err) {
      // Show the "error" alert box when there is an error during login
      setLoading(false);
      Alert.alert('Error', err.message);
    }
  };

  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={myStyle.mainView}>
        <View style={myStyle.View1}>
          <View style={myStyle.View1_1}>
            <Image
              style={myStyle.Image}
              source={require('../../../Assests/images/MainLogo.png')}
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
                  keyboardType="email-address"
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
            <TouchableOpacity
              disabled={loading}
              onPress={submit}
              style={myStyle.touchable1}>
              <Text style={myStyle.touchable1Text}>
                {!loading ? (
                  'Login'
                ) : (
                  <ActivityIndicator size={'small'} color={'#fff'} />
                )}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgetPassword')}>
              <Text style={myStyle.touchable2_1Text}>Forget Password</Text>
            </TouchableOpacity>
            {role == 'teacher' || role == 'guest' ? (
              <View style={myStyle.View_2_2_1}>
                <Text style={{fontSize: 14, top: 2}}>
                  Don't Have an Account?
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('SignUp', {
                      role,
                    })
                  }>
                  <Text style={myStyle.touchable2_2Text}>SignUp</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
