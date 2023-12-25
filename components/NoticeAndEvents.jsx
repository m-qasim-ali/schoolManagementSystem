import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NoticeAndEvent = () => {
  const [noticeDetails, setNoticeDetails] = React.useState({
    noticeTitle: 'Terminal Date Sheet',
    noticeDetail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Vestibulum tristique justo eget risus auctor, nec tristique nunc varius' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Vestibulum tristique justo eget risus auctor, nec tristique nunc varius',
  });

  return (
    <View style={styles.parentView}>
      <View style={styles.textAndDetailsView}>
        <Text style={styles.screenText}>Notice Title</Text>
        <TextInput
          style={styles.noticeTitleInputField}
          onChangeText={title => {
            setNoticeDetails(prevState => ({...prevState, noticeTitle: title}));
          }}
          value={noticeDetails.noticeTitle}
        />
        <Text style={styles.screenText}>Enter Details</Text>
        <TextInput
          style={styles.detailsInputFiled}
          multiline={true}
          onChangeText={text => {
            setNoticeDetails(prevState => ({...prevState, noticeDetail: text}));
          }}
          value={noticeDetails.noticeDetail}
        />

        <TouchableOpacity
          style={[styles.uploadImageButtonOpacity, {marginTop: 15}]}
          onPress={() => {
            console.log('Upload Image Clicked');
          }}>
          <Text style={styles.sendButtonText}>Upload Image</Text>
        </TouchableOpacity>
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
    </View>
  );
};

export default NoticeAndEvent;

const styles = StyleSheet.create({
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
    paddingHorizontal: 10,
  },
  screenText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
});
