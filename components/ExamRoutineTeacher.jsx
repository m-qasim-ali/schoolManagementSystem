import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExamRoutineScreen = () => {
  const assignmentFields = [
    'Assignment 1',
    'Assignment 2',
    'First Terminal ',
    'Assignment 3',
    'Assignment 4',
    'Second Terminal',
  ];

  const [myState, setMyState] = useState(
    assignmentFields.reduce((acc, field) => {
      acc[field] = new Date(2023, 9, 16);
      return acc;
    }, {}),
  );

  const [showDatePicker, setShowDatePicker] = useState(
    assignmentFields.reduce((acc, field) => {
      acc[field] = false;
      return acc;
    }, {}),
  );

  const handleDateChange = (date, field) => {
    setShowDatePicker({
      ...showDatePicker,
      [field]: false,
    });

    if (date) {
      setMyState({
        ...myState,
        [field]: date,
      });
    }
  };

  const openDatePicker = field => {
    setShowDatePicker({
      ...showDatePicker,
      [field]: true,
    });
    setMyState({
      ...myState,
      [field]: myState[field],
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.classAndsectionHeader}>
          <Text style={styles.classAndDateHeaderText}>Class: 3A</Text>
          <Text style={styles.classAndDateHeaderText}>
            Date:{' '}
            {new Date().getDate() +
              '/' +
              (new Date().getMonth() + 1) +
              '/' +
              new Date().getFullYear()}
          </Text>
        </View>
        <View style={{marginBottom: 10, flexDirection: 'row-reverse'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0C46C4',
              opacity: 0.7,
              width: '30%',
              borderRadius: 5,
              marginRight: 30,
            }}
            onPress={() => {
              console.log('Submit Button');
            }}>
            <Text style={[styles.stdNameAndMarksText, {textAlign: 'center'}]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stdNameAndMarksView}>
          <View style={styles.substdNameAndMarksView}>
            <Text style={[styles.stdNameAndMarksText, {marginLeft: 6}]}>
              Exam Routine
            </Text>
          </View>
        </View>
        <ScrollView style={{marginBottom: 20}}>
          {assignmentFields.map(field => (
            <View key={field} style={styles.studentRow}>
              <Text
                style={[
                  styles.studentName,
                  (field === 'First Terminal ' ||
                    field === 'Second Terminal') &&
                    styles.terminalText,
                ]}>
                {field.replace('Date', '')}
              </Text>
              <TouchableOpacity onPress={() => openDatePicker(field)}>
                <TextInput
                  style={styles.datePickerInput}
                  placeholder="Select Date"
                  editable={false}
                  value={myState[field].toLocaleDateString()}
                />
              </TouchableOpacity>
              {showDatePicker[field] && (
                <DateTimePicker
                  value={myState[field]}
                  mode="date"
                  display="default"
                  onChange={(event, date) => handleDateChange(date, field)}
                />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  classAndsectionHeader: {
    backgroundColor: '#0C46C4',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  classAndDateHeaderText: {
    color: 'white',
    fontWeight: '900',
    padding: 10,
  },
  stdNameAndMarksText: {
    color: 'white',
    fontWeight: '900',
    padding: 5,
  },
  terminalText: {
    fontWeight: 'bold',
    color: '#0C46C4',
  },
  stdNameAndMarksView: {
    backgroundColor: '#0C46C4',
    opacity: 0.7,
  },
  substdNameAndMarksView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: 'white',
  },
  datePickerInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 8,
    marginRight: 15,
    borderRadius: 5,
    textAlign: 'center',
    color: '#0C46C4',
  },
  studentName: {
    fontSize: 16,
  },
});

export default ExamRoutineScreen;
