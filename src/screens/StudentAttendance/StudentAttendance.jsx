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

const StudentAttendance = props => {
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);

  const {cls, uid, fullName} = props.route.params.user;

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const savedAttendance = await DBFunctions.getStudentAttendanceByUid(
          uid,
        );
        setAttendances(savedAttendance);
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    getAttendance();
  }, []);

  if (loading) {
    return <Loader />;
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
        <Text style={styles.classAndDateHeaderText}>Class: {cls}</Text>
        <Text style={styles.classAndDateHeaderText}>Name: {fullName}</Text>
      </View>

      <View style={styles.attendanceSectionView}>
        <View style={styles.studentNameView}>
          <Text style={[styles.subBarText, {marginLeft: 6}]}>Date</Text>
        </View>
        <View style={styles.presentAndAbsentView}>
          <Text style={styles.subBarText}>Present</Text>
          <Text style={styles.subBarText}>Absent</Text>
        </View>
      </View>

      <ScrollView>
        <View>
          {attendances.map(attendance => (
            <View key={attendance.id} style={styles.studentRow}>
              <View style={styles.studentNameView}>
                <Text style={styles.studentNameText}>{attendance.date}</Text>
              </View>
              <View style={styles.presentAndAbsentView}>
                <TouchableOpacity
                  disabled={true}
                  style={[
                    styles.checkbox,
                    attendance.present
                      ? styles.presentSelectedCheckbox
                      : styles.checkbox,
                  ]}
                />
                <TouchableOpacity
                  disabled={true}
                  style={[
                    styles.checkbox,
                    attendance.absent
                      ? styles.absentSelectedCheckbox
                      : styles.checkbox,
                  ]}
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

export default StudentAttendance;
