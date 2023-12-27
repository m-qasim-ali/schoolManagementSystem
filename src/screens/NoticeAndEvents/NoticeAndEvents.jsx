import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {DBFunctions} from '../../services';

const initialState = {
  noticeTitle: '',
  noticeDetail: '',
  selectedImage: null,
};

const NoticeAndEvent = props => {
  const [noticeDetails, setNoticeDetails] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);

  const selectImage = async () => {
    try {
      let result = await launchImageLibrary({mediaType: 'photo'});

      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setNoticeDetails(prevState => ({
          ...prevState,
          selectedImage: uri,
        }));
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };



  const handleSubmit = async () => {
    try {
      setLoading(true);
      await DBFunctions.saveNoticeWithImage(
        noticeDetails.noticeTitle,
        noticeDetails.noticeDetail,
        props.route.params.cls,
        noticeDetails.selectedImage,
      );
      setNoticeDetails(initialState);
      Alert.alert('Success', 'Notice uploaded successfully!');
    } catch (err) {
      Alert.alert(err.code, err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        style={styles.parentView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50} // Adjust as needed
      >
        <View style={styles.textAndDetailsView}>
          <Text style={styles.screenText}>Notice Title</Text>
          <TextInput
            style={styles.noticeTitleInputField}
            onChangeText={title => {
              setNoticeDetails(prevState => ({
                ...prevState,
                noticeTitle: title,
              }));
            }}
            multiline={true}
            placeholder="Terminal Date Sheet"
            value={noticeDetails.noticeTitle}
          />
          <Text style={styles.screenText}>Enter Details</Text>
          <TextInput
            style={styles.detailsInputFiled}
            multiline={true}
            onChangeText={text => {
              setNoticeDetails(prevState => ({
                ...prevState,
                noticeDetail: text,
              }));
            }}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique justo eget risus auctor, nec tristique nunc varius"
            value={noticeDetails.noticeDetail}
          />

          <View style={styles.uploadImageContainer}>
            <TouchableOpacity
              style={styles.uploadImageButtonOpacity}
              onPress={selectImage}>
              <Text style={styles.sendButtonText}>Upload Image</Text>
            </TouchableOpacity>

            {noticeDetails.selectedImage && (
              <View style={styles.selectedImageContainer}>
                <Image
                  source={{uri: noticeDetails.selectedImage}}
                  style={styles.selectedImage}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.bottomMostView}>
          <TouchableOpacity
            style={styles.sendButtonOpacity}
            disabled={loading}
            onPress={handleSubmit}>
            <Text style={styles.sendButtonText}>
              {!loading ? (
                'Send'
              ) : (
                <ActivityIndicator size="small" color="#fff" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NoticeAndEvent;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  parentView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  textAndDetailsView: {
    flex: 3,
    justifyContent: 'center',
  },
  bottomMostView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsInputFiled: {
    borderWidth: 1,
    padding: 10,
    height: '40%',
    borderColor: '#0C46C4',
    textAlignVertical: 'top',
    borderRadius: 5,
  },
  sendButtonOpacity: {
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    width: '90%',
  },
  sendButtonText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  uploadImageContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uploadImageButtonOpacity: {
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    width: '40%',
  },
  noticeTitleInputField: {
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#0C46C4',
    borderRadius: 5,
  },
  screenText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
  selectedImageContainer: {
    marginLeft: 10,
  },
  selectedImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 30,
  },
});