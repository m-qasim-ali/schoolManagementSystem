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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  );
  const [open, setOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
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
                onPress={() => modalOpen('StudentRESULT')}>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherDashboard;
