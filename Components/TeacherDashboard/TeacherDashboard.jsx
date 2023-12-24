import {useState} from 'react';
import myStyle from './Style';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const TeacherDashboard = props => {
  const [uri, setUri] = useState('icon');
  const [modalVisible, setModalVisible] = useState(false);
  const [_screen, setScreen] = useState('');
  const [_class, setClass] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  );
  const modalDown = () => {
    setModalVisible(!modalVisible);
  };
  const navigateTo = () => {
    console.log(_screen);
    props.navigation.navigate(
      {_screen},
      {
        classValue: _class,
        sectionValue: section,
        subjectValue: subject,
      },
    );
  };
  const modalOpen = screen => {
    setModalVisible(true);
    setScreen(screen);
  };
  return (
    <View style={myStyle.mainView}>
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={myStyle.centeredView}>
          <View style={myStyle.modalView}>
            <TextInput
              style={myStyle.modalText}
              onChangeText={setSubject}
              placeholder="Subject"
            />
            <TextInput
              style={myStyle.modalText}
              onChangeText={setSection}
              placeholder="Section"
            />
            <TextInput
              style={myStyle.modalText}
              onChangeText={setClass}
              placeholder="Class"
            />
            <TouchableOpacity
              style={[myStyle.button, myStyle.buttonClose]}
              onPress={() => {
                modalDown();
                navigateTo();
              }}>
              <Text style={myStyle.textStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}>
          {uri === 'icon' ? (
            <Icon name="happy-outline" size={120} color="grey" />
          ) : (
            <Image style={myStyle.Image} source={{uri: uri}} />
          )}
        </View>
      </View>
      <View style={myStyle.View2}>
        <View style={myStyle.View2_1}>
          <Text style={myStyle.Text2_11}>
            Welcome Message
            <Icon name="arrow-forward" color="white" size={20} />
          </Text>
          <Text style={myStyle.Text2_12}>The Standard Message</Text>
          <Text style={myStyle.Text2_13}>{message}</Text>
        </View>
        <View style={myStyle.View2_2}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={myStyle.View2_2_1}
              onPress={() => modalOpen('Attendence')}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/Attendance.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Attendece</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={myStyle.View2_2_1}
              onPress={() => modalOpen('HOMEWORK')}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/Homework.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Homework</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={myStyle.View2_2_1}
              onPress={() => modalOpen('RESULT')}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/Exam.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Result</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/TodoList.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Exam Routine</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/IdeaSharing.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Solution</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/Questions.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Notice & Events</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
              <Image
                style={myStyle.Image2_2_1}
                source={require('../../Assests/Images/AddUserMale.png')}
              />
            </TouchableOpacity>
            <Text style={myStyle.Text}>Add Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default TeacherDashboard;
