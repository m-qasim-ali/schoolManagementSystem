import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const AttendanceScreen = (props) => {
  const [students, setStudents] = useState([
    {id: 1, name: 'Student 1', present: false, absent: false},
    {id: 2, name: 'Student 2', present: false, absent: false},
    {id: 3, name: 'Student 3', present: false, absent: false},
    {id: 4, name: 'Student 4', present: false, absent: false},
    {id: 5, name: 'Student 5', present: false, absent: false},
    {id: 6, name: 'Student 6', present: false, absent: false},
    {id: 7, name: 'Student 7', present: false, absent: false},
    {id: 8, name: 'Student 8', present: false, absent: false},
    {id: 9, name: 'Student 9', present: false, absent: false},
    {id: 10, name: 'Student 10', present: false, absent: false},
    {id: 11, name: 'Student 11', present: false, absent: false},
    {id: 12, name: 'Student 12', present: false, absent: false},
  ]);

  const handleToggleAttendance = (studentId, attendanceType) => {
    setStudents(prevStudents =>
      prevStudents.map(student => {
        if (student.id === studentId) {
          return {
            ...student,
            [attendanceType]: !student[attendanceType],
            [attendanceType === 'present' ? 'absent' : 'present']: false,
          };
        }
        return student;
      }),
    );
  };

  const timeStamp = new Date(Date.now());

  return (
    <View style={styles.parentView}>
      <View style={styles.classAndsectionHeader}>
        <Text style={ styles.classAndDateHeaderText }>Class: { props.route.params.class_value}</Text>
        <Text style={styles.classAndDateHeaderText}>
          Date:{' '}
          {timeStamp.getDate() +
            '/' +
            (timeStamp.getMonth() + 1) +
            '/' +
            timeStamp.getFullYear()}
        </Text>
      </View>

      <View style={styles.attendanceSectionView}>
        <View style={styles.studentNameView}>
          <Text style={[styles.subBarText, {marginLeft: 6}]}>Student Name</Text>
        </View>
        <View style={styles.presentAndAbsentView}>
          <Text style={styles.subBarText}>Present</Text>
          <Text style={styles.subBarText}>Absent</Text>
        </View>
      </View>

      <ScrollView>
        <View>
          {students.map(student => (
            <View key={student.id} style={styles.studentRow}>
              <View style={styles.studentNameView}>
                <Text style={styles.studentNameText}>{student.name}</Text>
              </View>
              <View style={styles.presentAndAbsentView}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    student.present
                      ? styles.presentSelectedCheckbox
                      : styles.checkbox,
                  ]}
                  onPress={() => handleToggleAttendance(student.id, 'present')}
                />
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    student.absent
                      ? styles.absentSelectedCheckbox
                      : styles.checkbox,
                  ]}
                  onPress={() => handleToggleAttendance(student.id, 'absent')}
                />
              </View>
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
    marginBottom: 30,
  },
  classAndDateHeaderText: {
    color: 'white',
    fontWeight: '900',
    padding: 10,
  },
  attendanceSectionView: {
    backgroundColor: '#0C46C4',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studentNameView: {
    width: '40%',
  },
  presentAndAbsentView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  },
  studentNameText: {
    color: 'black',
    padding: 5,
  },
  subBarText: {
    color: 'white',
    fontWeight: '700',
    padding: 5,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#FAF9F6',
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#0C46C4',
    borderRadius: 5,
  },
  presentSelectedCheckbox: {
    backgroundColor: 'green',
  },
  absentSelectedCheckbox: {
    backgroundColor: 'red',
  },
});

export default AttendanceScreen;
