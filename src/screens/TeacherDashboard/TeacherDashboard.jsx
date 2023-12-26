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
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setUser} from '../../store/userSlice';
import {Auth} from '../../services';

const TeacherDashboard = props => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [_screen, setScreen] = useState('');
  const [data, setData] = useState({
    class: '',
    section: '',
    subject: '',
  });
  const [message, setMessage] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et do',
  );
  const user = useSelector(selectUser);

  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mathematics', value: 'Math'},
    {label: 'English', value: 'English'},
    {label: 'Science', value: 'Science'},
    {label: 'History', value: 'History'},
    {label: 'Computer Science', value: 'CS'},
  ]);

  const modalDown = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        onPress: async () => {
          try {
            await Auth.signOut();
            dispatch(setUser(null));
          } catch (err) {
            Alert.alert('Error', err.message);
          }
        },
      },
    ]);
  };

  const navigateTo = () => {
    console.log(_screen);
    props.navigation.navigate({
      name: _screen,
      params: {
        course_value: course,
        user: user,
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
                  value={course}
                  items={items}
                  setOpen={setOpen}
                  setValue={setCourse}
                  setItems={setItems}
                  placeholder={'Course'}
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
            source={require('../../../Assests/images/teacher.jpeg')}
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
                onPress={() =>
                  props.navigation.navigate('TeacherAttendance', {user})
                }>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/Attendance.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Attendece</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => modalOpen('HomeWorkTeacher')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/Homework.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Homework</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => modalOpen('AddMarks')}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/Exam.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Result</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/TodoList.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Exam Routine</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => {
                  props.navigation.navigate('SolutionsTeacher');
                }}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/IdeaSharing.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Solution</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => {
                  props.navigation.navigate('NoticeAndEvents');
                }}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/Questions.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Notice & Events</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() => {
                  props.navigation.navigate('AddStudent');
                }}>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/AddUserMale.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Add Account</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={handleLogout}>
                <Icon name="exit" size={50} color="#0C46C4" />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Logout</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherDashboard;
