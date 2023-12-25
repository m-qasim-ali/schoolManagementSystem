import {useEffect, useState} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';

const SignUp = props => {
  const {role: Role} = props.route.params;
  const [role, setRole] = useState(Role);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1A', value: '1A'},
    {label: '1B', value: '1B'},
    {label: '2A', value: '2A'},
    {label: '2B', value: '2B'},
    {label: '3A', value: '3A'},
    {label: '3B', value: '3B'},
    {label: '4A', value: '4A'},
    {label: '4B', value: '4B'},
    {label: '5A', value: '5A'},
    {label: '5B', value: '5B'},
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classes = await Auth.getAllClasses();
        setItems(prev => prev.filter(item => !classes.includes(item.label)));
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (
      username.length == 0 ||
      password.length == 0 ||
      email.length == 0 ||
      classValue == null
    ) {
      Alert.alert('Required', 'All fields are required!');
    } else {
      setLoading(true);
      if (role == 'teacher') {
        await Auth.registerTeacher(username, email, password, classValue);
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
          </View>
        </ScrollView>
        <View style={myStyle.View2_1}>
          {role == 'teacher' && (
            <View>
              <DropDownPicker
                open={open}
                value={classValue}
                items={items}
                setOpen={setOpen}
                setValue={setClassValue}
                setItems={setItems}
                placeholder={'Class'}
              />
            </View>
          )}
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
    </View>
  );
};
export default SignUp;

// props.navigation.navigate('Login', {role: 'teacher'})
