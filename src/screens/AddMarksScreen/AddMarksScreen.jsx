import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const AddMarksScreen = props => {
  const [students, setStudents] = useState([
    {id: 1, name: 'Student 1', marks: ''},
    {id: 2, name: 'Student 2', marks: ''},
    {id: 3, name: 'Student 3', marks: ''},
    {id: 4, name: 'Student 4', marks: ''},
    {id: 5, name: 'Student 5', marks: ''},
    {id: 6, name: 'Student 6', marks: ''},
    {id: 7, name: 'Student 7', marks: ''},
    {id: 8, name: 'Student 8', marks: ''},
    {id: 9, name: 'Student 9', marks: ''},
  ]);

  const handleMarksChange = (studentId, marks) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? {...student, marks} : student,
      ),
    );
  };

  const timeStamp = new Date(Date.now());

  return (
    <View style={styles.parentView}>
      <View style={styles.classAndsectionHeader}>
        <Text style={styles.classAndDateHeaderText}>
          Class: {props.route.params.user.cls}
        </Text>
        <Text style={styles.classAndDateHeaderText}>
          Date:{' '}
          {timeStamp.getDate() +
            '/' +
            timeStamp.getMonth() +
            '/' +
            timeStamp.getFullYear()}
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
            Student Name
          </Text>
          <Text style={[styles.stdNameAndMarksText, {marginRight: 50}]}>
            Marks
          </Text>
        </View>
      </View>
      <ScrollView style={{marginBottom: 20}}>
        <View>
          {students.map(student => (
            <View key={student.id} style={styles.studentRow}>
              <Text style={styles.studentName}>{student.name}</Text>
              <TextInput
                style={styles.marksInput}
                placeholder="Enter Marks"
                keyboardType="numeric"
                value={student.marks}
                onChangeText={marks => handleMarksChange(student.id, marks)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
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
  stdNameAndMarksView: {
    backgroundColor: '#0C46C4',
    opacity: 0.7,
  },
  substdNameAndMarksView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stdNameAndMarksText: {
    color: 'white',
    fontWeight: '900',
    padding: 5,
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
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marksInput: {
    width: '30%',
    borderWidth: 1,
    padding: 8,
    marginRight: 15,
    borderRadius: 5,
  },
});

export default AddMarksScreen;
