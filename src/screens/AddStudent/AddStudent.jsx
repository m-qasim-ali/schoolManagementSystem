import {useState} from 'react';
import myStyle from './style';
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {Auth} from '../../services';
import {selectUser} from '../../store/userSlice';
import {useSelector} from 'react-redux';

const AddStudent = () => {
  const [imageSource, setImageSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const teacher = useSelector(selectUser);
  const selectImage = async () => {
    try {
      let result = await launchImageLibrary({mediaType: 'photo'});

      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setImageSource(uri);
        onChange('photo', uri);
      }
    } catch (error) {
      Alert.alert('Error selecting image:', error.message);
    }
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNo: '',
    photo: '',
  });
  const onChange = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const onSubmit = async () => {
    const data = {
      ...formData,
      cls: teacher.cls,
      teacherName: teacher.fullName,
    };
    try {
      setLoading(true);
      await Auth.registerStudent(
        data.fullName,
        data.email,
        data.rollNo,
        data.cls,
        data.photo,
        data.teacherName,
      );

      Alert.alert('Registered Student!');
    } catch (err) {
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
    setFormData({
      fullName: '',
      email: '',
      rollNo: '',
      photo: '',
    });
    setImageSource(null);
  };

  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}>
        <TouchableOpacity style={myStyle.View1_1} onPress={selectImage}>
          {imageSource ? (
            <Image source={{uri: imageSource}} style={myStyle.Image} />
          ) : (
            <>
              <Icon name="plus" size={120} color="#C4C4C4" />
              <Text style={{color: '#28C2A0', fontWeight: 'bold'}}>
                Add Photo
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={myStyle.View2}>
          <View style={myStyle.View2_1}>
            <Text>Full Name</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Student Name"
              onChangeText={text => onChange('fullName', text)}
              value={formData.fullName}
            />
          </View>
          <View style={myStyle.View2_1}>
            <Text>Email</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Email"
              onChangeText={text => onChange('email', text)}
              value={formData.email}
            />
          </View>

          <View style={myStyle.View2_1}>
            <Text>Roll No.</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="UC-X"
              onChangeText={text => onChange('rollNo', text)}
              value={formData.rollNo}
            />
          </View>
          <View style={myStyle.View2_1}>
            <TouchableOpacity
              disabled={loading}
              style={{
                padding: 15,
                backgroundColor: '#0C46C4',
                borderRadius: 5,
                marginBottom: 40,
              }}
              onPress={onSubmit}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                {loading ? 'Adding...' : 'Add Student'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddStudent;
