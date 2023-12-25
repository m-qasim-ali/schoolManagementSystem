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
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

const TeacherDashboard = props => {
  const [uri, setUri] = useState('icon');
  const [modalVisible, setModalVisible] = useState(false);
  const [_screen, setScreen] = useState('');

  const [message, setMessage] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et do',
  );

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

  const modalDown = () => {
    setModalVisible(!modalVisible);
  };

  const navigateTo = () => {
    console.log(_screen);
   props.navigation.navigate({
     name: _screen,
     params: {
       class_value: classValue,
     },
   });
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
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={modalDown}>
          <View style={myStyle.centeredView}>
            <TouchableWithoutFeedback>
              <View style={myStyle.modalView}>
                <DropDownPicker
                  open={open}
                  value={classValue}
                  items={items}
                  setOpen={setOpen}
                  setValue={setClassValue}
                  setItems={setItems}
                  placeholder={'Class'}
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
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}>
          <Image
            style={myStyle.Image}
            source={require('../../Assests/Images/teacher.jpeg')}
          />
        </View>
      </View>
      <ScrollView>
        <View style={myStyle.View2}>
          <View style={myStyle.View2_1}>
            <View style={myStyle.welcomeHeader}>
              <Text style={myStyle.Text2_11}>Welcome Message</Text>
              <Icon name="arrow-forward" color="white" size={20} />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={myStyle.Text2_12}>The Standard Message</Text>
              <Text style={myStyle.Text2_13}>{message}</Text>
            </View>
          </View>

          <View style={myStyle.View2_2}>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => modalOpen('AttendanceScreen')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/Attendance.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Attendece</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => modalOpen('HomeWorkScreen')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/Homework.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Homework</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => modalOpen('ResultScreen')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/Exam.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Result</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/TodoList.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Exam Routine</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => props.navigation.navigate('SolutionsScreen')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/IdeaSharing.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Solution</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() =>
                  props.navigation.navigate('NoticeAndEventsScreen')
                }>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/Questions.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Notice & Events</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity style={myStyle.View2_2_1} onPress={() => props.navigation.navigate('addStudent')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../Assests/Images/AddUserMale.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Add Account</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherDashboard;
