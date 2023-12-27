import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {DBFunctions} from '../../services';
import Loader from '../../components/Loader';
import {getFormattedDate} from '../../utils/getFormattedDate';
import NoData from '../../components/NoData';

const AttendanceScreen = props => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const {cls, uid} = props.route.params.user;

  useEffect(() => {
    const getStudents = async () => {
      try {
        const savedAttendance = await DBFunctions.getAttendanceForClassAndDate(
          cls,
        );

        if (savedAttendance.length == 0) {
          const data = await DBFunctions.getStudentsByClass(cls);
          if (data.length == 0) {
            setStudents(null);
          } else {
            const res = data.map(std => ({
              id: std.uid,
              name: std.fullName,
              present: false,
              absent: false,
            }));
            setStudents(res);
          }
        } else {
          setStudents(savedAttendance[0].students);
        }
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

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

  if (loading) {
    return <Loader />;
  }

  if (students == null) {
    return <NoData title={'No Student Found!'} />;
  }

  const submitAttendance = async () => {
    try {
      setSaving(true);
      await DBFunctions.saveAttendanceInDb(cls, uid, students);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.classAndsectionHeader}>
        <Text style={styles.classAndDateHeaderText}>
          Class: {props.route.params.user.cls}
        </Text>
        <Text style={styles.classAndDateHeaderText}>
          Date: {getFormattedDate()}
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
          disabled={saving}
          onPress={submitAttendance}>
          <Text style={[styles.stdNameAndMarksText, {textAlign: 'center'}]}>
            {saving ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              'Submit'
            )}
          </Text>
        </TouchableOpacity>
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
    marginBottom: 10,
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
