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
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const NoticeAndEvent = () => {
  const [noticeDetails, setNoticeDetails] = React.useState({
    noticeTitle: 'Terminal Date Sheet',
    noticeDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique justo eget risus auctor, nec tristique nunc varius',
    selectedImage: null,
  });

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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        style={styles.parentView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150} // Adjust as needed
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
            value={noticeDetails.noticeDetail}
          />

          <TouchableOpacity
            style={[styles.uploadImageButtonOpacity, {marginTop: 15}]}
            onPress={selectImage}>
            <Text style={styles.sendButtonText}>Upload Image</Text>
          </TouchableOpacity>

          {noticeDetails.selectedImage && (
            <View style={{marginTop: 20}}>
              <Text style={styles.screenText}>Selected Image:</Text>
              <Image
                source={{uri: noticeDetails.selectedImage}}
                style={{width: 150, height: 150}}
              />
            </View>
          )}
        </View>
        <View style={styles.bottomMostView}>
          <TouchableOpacity
            style={styles.sendButtonOpacity}
            onPress={() => {
              console.log('Send Clicked');
            }}>
            <Text style={styles.sendButtonText}>Send</Text>
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
    marginBottom: 30,
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
  },
  sendButtonOpacity: {
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    width: '70%',
  },
  sendButtonText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
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
  },
  screenText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
});
