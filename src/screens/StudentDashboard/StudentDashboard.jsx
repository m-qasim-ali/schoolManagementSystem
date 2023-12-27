import {useEffect, useState} from 'react';
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
import {selectUser, setUser} from '../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from '../../services';

const StudentDashboard = props => {
  const dispatch = useDispatch();
  const [uri, setUri] = useState('icon');
  const [modalVisible, setModalVisible] = useState(false);
  const [_screen, setScreen] = useState('');
  const user = useSelector(selectUser);
  const [message, setMessage] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et do',
  );
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState('');
  const [items, setItems] = useState([
    {label: 'Mathematics', value: 'Math'},
    {label: 'English', value: 'English'},
    {label: 'Science', value: 'Science'},
    {label: 'History', value: 'History'},
    {label: 'Computer Science', value: 'CS'},
    {label: 'Physics', value: 'Physics'},
    {label: 'Chemistry', value: 'Chemistry'},
    {label: 'Biology', value: 'Biology'},
    {label: 'Literature', value: 'Literature'},
    {label: 'Geography', value: 'Geography'},
  ]);

  const [term, setTerm] = useState('');
  const [openTerminal, setOpenTerminal] = useState(false);
  const [itemsTerm, setItemsTerm] = useState([
    {label: 'First Terminal', value: 'First Terminal'},
    {label: 'Second Terminal', value: 'Second Terminal'},
    {label: 'Final Terminal', value: 'Final Terminal'},
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

  useEffect(() => {
    setUri(user.imageUrl);
  }, []);

  const navigateTo = () => {
    if (_screen === 'AddMarks') {
      props.navigation.navigate({
        name: _screen,
        params: {
          course,
          user,
          terminal: term,
        },
      });
    } else {
      props.navigation.navigate({
        name: _screen,
        params: {
          course,
          user,
        },
      });
    }
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
                {_screen === 'AddMarks' ? (
                  <>
                    <DropDownPicker
                      open={open}
                      value={course}
                      items={items}
                      setOpen={setOpen}
                      setValue={setCourse}
                      setItems={setItems}
                      placeholder={'Course'}
                      zIndex={1000}
                    />
                    <DropDownPicker
                      open={openTerminal}
                      value={term}
                      items={itemsTerm}
                      setOpen={setOpenTerminal}
                      setValue={setTerm}
                      setItems={setItemsTerm}
                      placeholder={'Terminals'}
                      zIndex={500}
                    />
                  </>
                ) : (
                  <DropDownPicker
                    open={open}
                    value={course}
                    items={items}
                    setOpen={setOpen}
                    setValue={setCourse}
                    setItems={setItems}
                    placeholder={'Course'}
                  />
                )}
                <TouchableOpacity
                  disabled={
                    _screen == 'AddMarks'
                      ? course.length == 0 || term.length == 0
                      : course.length == 0
                  }
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
          {uri === 'icon' ? (
            <Icon name="happy-outline" size={120} color="grey" />
          ) : (
            <Image style={myStyle.Image} source={{uri: uri}} />
          )}
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
                  props.navigation.navigate('StudentAttendance', {user})
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
                onPress={() => modalOpen('HomeWorkList')}>
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
                onPress={() =>
                  props.navigation.navigate('ResultStudent', {user})
                }>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/Exam.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Result</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity
                style={myStyle.View2_2_1}
                onPress={() =>
                  props.navigation.navigate('ExamRoutineStudent', {
                    cls: user.cls,
                  })
                }>
                <Image
                  style={myStyle.Image2_2_1}
                  source={require('../../../Assests/images/TodoList.png')}
                />
              </TouchableOpacity>
              <Text style={myStyle.Text}>Exam Routine</Text>
            </View>
            <View style={myStyle.box}>
              <TouchableOpacity style={myStyle.View2_2_1} onPress={() => {}}>
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
                  props.navigation.navigate('StudentNoticeEvents', {user});
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

export default StudentDashboard;
