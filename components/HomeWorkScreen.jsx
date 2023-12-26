import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

function HomeWorkScreen() {
  const [myState, setMyState] = React.useState({
    className: 'BCS-6B',
    classSection: 'Section Here',
    subjectName: 'English',
    questionTitle: '',
    questionDescription: '',
    fileStatus: false,
    selectedFile: null,
  });

  const isSubmitDisabled = () =>
    myState.questionTitle.length === 0 ||
    myState.questionDescription.length === 0 ||
    myState.fileStatus === false;

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setMyState(prevState => ({
        ...prevState,
        selectedFile: result,
        fileStatus: true,
      }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.error('Error picking document:', err);
      }
    }
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.parentView}>
          <View style={styles.questionMaterialSection}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.subjectText}>Subject : </Text>
              <Text style={{color: 'black'}}>{myState.subjectName}</Text>
            </View>

            <View>
              <Text style={styles.subjectText}>Question Title</Text>
              <TextInput
                multiline={true}
                style={styles.homeWorkInputField}
                onChangeText={text => {
                  setMyState(prevState => ({
                    ...prevState,
                    questionTitle: text,
                  }));
                }}
                placeholder="Some Random Question"
                value={myState.questionTitle}
              />
            </View>

            <View>
              <Text style={styles.subjectText}>Enter Details</Text>
              <TextInput
                multiline={true}
                style={styles.detailsInputField}
                onChangeText={text => {
                  setMyState(prevState => ({
                    ...prevState,
                    questionDescription: text,
                  }));
                }}
                placeholder="Explain Question According to Your Title"
                value={myState.questionDescription}
              />
            </View>

            <View style={{gap: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={styles.uploadFileButton}
                  onPress={pickDocument}>
                  <Text style={styles.submitText}>Upload File</Text>
                </TouchableOpacity>
                {myState.fileStatus === true &&
                myState.selectedFile !== null ? (
                  <View
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 100,
                      height: 30,
                      width: 30,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      backgroundColor: 'red',
                      borderRadius: 100,
                      height: 30,
                      width: 30,
                    }}
                  />
                )}
              </View>

              <View style={{marginVertical: 20}}>
                <TouchableOpacity
                  style={[
                    styles.submitButton,
                    {
                      backgroundColor: isSubmitDisabled()
                        ? '#A9A9A9'
                        : '#0C46C4',
                    },
                  ]}
                  onPress={() => {
                    console.log(myState.questionTitle);
                  }}
                  disabled={isSubmitDisabled()}>
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  parentView: {
    marginTop: 30,
  },
  questionMaterialSection: {
    gap: 20,
    width: '90%',
    alignSelf: 'center',
  },
  subjectText: {
    color: '#0C46C4',
    fontWeight: '900',
  },
  homeWorkInputField: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#0C46C4',
  },
  detailsInputField: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#0C46C4',
    textAlignVertical: 'top',
    height: 200,
  },
  submitButton: {
    alignSelf: 'center',
    width: '90%',
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },

  footerText: {
    color: 'white',
    fontWeight: '900',
  },
  uploadFileButton: {
    backgroundColor: '#0C46C4',
    width: '30%',
    padding: 5,
    borderRadius: 10,
  },
});

export default HomeWorkScreen;
