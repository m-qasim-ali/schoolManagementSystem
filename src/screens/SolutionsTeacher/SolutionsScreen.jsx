import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SolutionsScreen = () => {
  const [myState, setMyState] = React.useState({
    questionNo: '12',
    questionTitle:
      'What Is Your Name' +
      'My Nam kjhh kH dfjh dfkjz kjf hkjz' +
      'nfk jhs jkgsd fkjbg kjfbvk jcxbj vkxc jvn kj xcv' +
      'kznfk zjbfkj nfh jksfkj nmbfj bkj dsf m zx  zid ffkj' +
      'zmb fjzf jbs fbkj dsbf zb kjcb jkzf zjbfjkb zkj bfj',
    questionSolution:
      'Please Mentioned Some Good Question Here' +
      'jgfgf sgcsgh ghdcghd jhdb hbfhbf' +
      'bjfbjkf cjbjf nmbfjk bjkfbjk mfbjknj',
  });

  return (
    <KeyboardAwareScrollView
      style={styles.parentView}
      contentContainerStyle={styles.scrollContent}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled">
      <View>
        <View style={styles.questionNumberAndTitle}>
          <Text style={styles.screenText}>
            Question No #{myState.questionNo}
          </Text>
          <TextInput
            style={styles.questionNumberField}
            keyboardType="numeric"
            onChangeText={text => {
              setMyState(prevState => ({
                ...prevState,
                questionNo: text,
              }));
            }}
            value={myState.questionNo}
          />
        </View>

        <View style={styles.QuestionSolutionAnswer}>
          <Text style={styles.screenText}>Question Title</Text>
          <TextInput
            style={styles.questionTitleField}
            multiline={true}
            onChangeText={text => {
              setMyState(prevState => ({
                ...prevState,
                questionTitle: text,
              }));
            }}
            value={myState.questionTitle}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.screenText}>Enter Details</Text>
          <TextInput
            style={styles.questionTitleField}
            value={myState.questionSolution}
            onChangeText={text => {
              setMyState(prevState => ({
                ...prevState,
                questionSolution: text,
              }));
            }}
            multiline={true}
          />
        </View>

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            console.log('Buttin Clicked');
          }}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SolutionsScreen;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    padding: 10,
  },
  scrollContent: {
    flexGrow: 1,
  },
  questionNumberAndTitle: {
    marginTop: 40,
  },
  screenText: {
    fontWeight: '600',
    color: '#0C46C4',
  },
  questionNumberField: {
    borderWidth: 1,
    borderRadius: 5,
    width: '40%',
    padding: 8,
    borderColor: '#0C46C4',
  },
  QuestionSolutionAnswer: {
    marginTop: 10,
  },
  questionTitleField: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'justify',
    borderColor: '#0C46C4',
  },
  sendButton: {
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  sendButtonText: {
    padding: 15,
    textAlign: 'center',
    color: 'white',
  },
});
