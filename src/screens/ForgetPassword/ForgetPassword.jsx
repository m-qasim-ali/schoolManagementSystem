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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Auth} from '../../services';

const ForgetPassword = props => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      if (email.length === 0) {
        Alert.alert('Required', 'All fields are required!');
      } else {
        setLoading(true);
        await Auth.forgetPassword(email);
        setLoading(false);
        Alert.alert('Success', 'Reset Password Email send!...');
      }
    } catch (err) {
      // Show the "error" alert box when there is an error during login
      setLoading(false);
      Alert.alert('Error', err.message);
    }
  };

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
              <TouchableOpacity
                disabled={loading}
                style={myStyle.touchable1}
                onPress={submit}>
                <Text style={myStyle.touchable1Text}>Forget Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ForgetPassword;
