import {

  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import myStyle from './Style';
const SelctionRole = (props) => {
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
        <Text style={myStyle.Text}>Choose Your Options</Text>
        <View style={myStyle.View2_1}>
          <TouchableOpacity
            style={myStyle.touchable1}
            onPress={() =>
              props.navigation.navigate('Login', {role: 'student'}) 
            }>
            <View style={myStyle.touchView}>
              <Image source={require('../../Assests/Images/StudentMale.png')} />
            </View>
            <Text style={myStyle.touchText}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={myStyle.touchable1}
            onPress={() =>
              props.navigation.navigate('Login', {role: 'teacher'})
            }>
            <View style={myStyle.touchView}>
              <Image source={require('../../Assests/Images/Tuition.png')} />
            </View>
            <Text style={myStyle.touchText}>Teacher</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={myStyle.touchable1}
            onPress={() => props.navigation.navigate('Login', {role: 'guest'})}>
            <View style={myStyle.touchView}>
              <Image source={require('../../Assests/Images/Person.png')} />
            </View>
            <Text style={myStyle.touchText}>Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SelctionRole;
