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

const AddStudent = () => {
  const [uri, setUri] = useState('icon');
  const [imageSource, setImageSource] = useState(null);
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
    class: '',
    section: '',
    rollNo: '',
    photo: '',
  });
  const onChange = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const onSubmit = () => {
    Alert.alert('Data Uploaded Successfully.');
    setFormData({
      fullName: '',
      email: '',
      class: '',
      section: '',
      rollNo: '',
      photo: '',
    });
    setImageSource(null);
  };
  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={selectImage}>
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
      </View>
      <ScrollView>
        <View style={myStyle.View2}>
          <View style={myStyle.View2_1}>
            <Text>Full Name</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Enter Something..."
              onChangeText={text => onChange('fullName', text)}
              value={formData.fullName}
            />
          </View>
          <View style={myStyle.View2_1}>
            <Text>Email</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Enter Something..."
              onChangeText={text => onChange('email', text)}
              value={formData.email}
            />
          </View>
          <View style={myStyle.View2_1}>
            <Text>Class</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Enter Something..."
              onChangeText={text => onChange('class', text)}
              value={formData.class}
            />
          </View>
          <View style={myStyle.View2_1}>
            <Text>Section</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Enter Something..."
              onChangeText={text => onChange('section', text)}
              value={formData.section}
            />
          </View>
          <View style={myStyle.View2_1}>
            <Text>Roll No.</Text>
            <TextInput
              style={myStyle.textInput}
              placeholder="Enter Something..."
              onChangeText={text => onChange('rollNo', text)}
              value={formData.rollNo}
            />
          </View>
          <View style={myStyle.View2_1}>
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: '#0C46C4',
                borderRadius: 5,
                marginBottom: 40,
              }}
              onPress={onSubmit}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Add Student
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddStudent;
