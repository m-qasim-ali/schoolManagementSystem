import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {DBFunctions} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';

function HomeWorkScreen(props) {
  const initialState = {
    cls: props.route.params.user.cls,
    course: props.route.params.course,
    title: '',
    description: '',
    file: null,
  };
  const [myState, setMyState] = React.useState(initialState);

  const [fileStatus, setFileStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const isSubmitDisabled = () =>
    myState.title.length === 0 ||
    myState.description.length === 0 ||
    fileStatus === false;

  const pickDocument = async () => {
    try {
      let result = await launchImageLibrary({mediaType: 'photo'});

      if (!result.didCancel) {
        const uri = result.assets[0].uri;
        setMyState(prevState => ({
          ...prevState,
          file: uri,
        }));
        setFileStatus(true);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await DBFunctions.uploadAssignment(myState);
      setMyState(initialState);
      setFileStatus(false);
      Alert.alert('Success', 'Assignment uploaded!');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
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
              <Text style={{color: 'black'}}>{myState.cls}</Text>
            </View>

            <View>
              <Text style={styles.course}>Question Title</Text>
              <TextInput
                multiline={true}
                style={styles.homeWorkInputField}
                onChangeText={text => {
                  setMyState(prevState => ({
                    ...prevState,
                    title: text,
                  }));
                }}
                placeholder="Some Random Question"
                value={myState.title}
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
                    description: text,
                  }));
                }}
                placeholder="Explain Question According to Your Title"
                value={myState.description}
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
                {fileStatus === true && myState.file !== null ? (
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
                  onPress={handleSubmit}
                  disabled={isSubmitDisabled() || loading}>
                  <Text style={styles.submitText}>
                    {!loading ? (
                      'Submit'
                    ) : (
                      <ActivityIndicator size={'small'} color={'#fff'} />
                    )}
                  </Text>
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
