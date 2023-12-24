import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
function HomeWorkScreen() {
  const [homeWork, setHomeWork] = React.useState('');
  const [subjectName, setSubjectName] = React.useState('Subject Name');
  const [className, setClassName] = React.useState('BCS-6B');
  const [classSection, setClassSection] = React.useState('BCS-6B');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}>
      <View style={Styles.parentView}>
        <View style={Styles.questionDescriptionSection}>
          <Text style={Styles.questionTittle}>
            Home Work Description Text Here
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur ducimus reprehenderit asperiores. Corporis,
            voluptatibus. Tenetur perferendis quaerat voluptatibus, cupiditate
            inventore quasi aperiam laudantium dolores quis praesentium tempore
            itaque omnis reiciendis, ad repudiandae.
          </Text>
        </View>

        <View style={Styles.questionMaterialSection}>
          <Text style={Styles.subjectText}>{subjectName}</Text>

          <View>
            <Text>Add Homework</Text>

            <TextInput
              style={Styles.homeWorkInputFiled}
              onChangeText={setHomeWork}
            />
          </View>

          <TouchableOpacity
            style={Styles.submitButtonOpacity}
            onPress={() => {
              console.log(homeWork);
            }}>
            <Text style={Styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <Text style={Styles.fileStatuesText}>
            File is Uploaded successfully
          </Text>
        </View>

        <View style={Styles.footerView}>
          <Text style={Styles.footerTextLeft}>{className}</Text>
          <Text style={Styles.footerTextRight}>{classSection}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const Styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  questionDescriptionSection: {
    flex: 2,
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  questionMaterialSection: {
    flex: 3,
    gap: 40,
    width: '85%',
    alignSelf: 'center',
  },
  questionTittle: {
    fontWeight: '900',
    fontSize: 15,
    color: 'black',
  },
  subjectText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
  submitButtonOpacity: {
    alignSelf: 'center',
    backgroundColor: '#0C46C4',
    width: '80%',
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
  homeWorkInputFiled: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  fileStatuesText: {
    textAlign: 'center',
  },
  footerView: {
    backgroundColor: '#0C46C4',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerTextLeft: {
    color: 'white',
    fontWeight: '900',
  },

  footerTextRight: {
    color: 'white',
    fontWeight: '900',
  },
});
export default HomeWorkScreen;
