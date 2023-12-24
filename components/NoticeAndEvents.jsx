import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NoticeAndEvent = () => {
  const [noticeDetails, setNoticeDetails] = React.useState(
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer',
  );

  return (
    <View style={styles.parentView}>
      <View style={styles.textAndDetailsView}>
        <Text style={{marginBottom: 10}}>Enter Details</Text>
        <TextInput
          style={styles.detailsInputFiled}
          multiline={true}
          onChangeText={text => {
            setNoticeDetails(text);
          }}
          value={noticeDetails}
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
});
