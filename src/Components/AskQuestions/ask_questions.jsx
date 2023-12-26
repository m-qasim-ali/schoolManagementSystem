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
import DocumentPicker from 'react-native-document-picker';
const AskQuestion = () => {
  const [noticeDetails, setNoticeDetails] = React.useState({
    noticeDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique justo eget risus auctor, nec tristique nunc varius',
    selctedFile: null,
  });
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size,
      );

      setNoticeDetails(prevState => ({
        ...prevState,
        selctedFile: uri,
      }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('Document picking cancelled');
      } else {
        console.error('Error while picking document', err);
      }
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

          <View style={styles.uploadImageContainer}>
            {/* <TouchableOpacity
              style={styles.uploadImageButtonOpacity}
              onPress={pickDocument}>
              <Text style={styles.sendButtonText}>Upload File</Text>
            </TouchableOpacity> */}

            {noticeDetails.selectedImage && (
              <View style={styles.selectedImageContainer}>
                <Text style={styles.screenText}>Selected Image</Text>
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

export default AskQuestion;

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
