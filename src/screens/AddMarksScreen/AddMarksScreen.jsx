import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
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

const AddMarksScreen = props => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [totalMarks, setTotalMarks] = useState('');
  const [saving, setSaving] = useState(false);

  const {cls, uid} = props.route.params.user;

  const handleMarksChange = (studentId, marks) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? {...student, marks} : student,
      ),
    );
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await DBFunctions.getStudentsByClass(cls);
        const res = data.map(std => ({
          id: std.uid,
          name: std.fullName,
          marks: '',
        }));
        setStudents(res);
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  const handleSubmit = async () => {
    const data = {
      totalMarks,
      cls,
      course: props.route.params.course,
      terminal: props.route.params.terminal,
      date: getFormattedDate(),
      students,
    };

    try {
      setSaving(true);
      await DBFunctions.saveStudentMarks(data);
      Alert.alert('Success', 'Marks Uploaded');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (students.length == 0) {
    return <NoData title="No student registered!" />;
  }

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

      <View
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{marginLeft: 30, color: '#0C46C4'}}>
          {props.route.params.terminal}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#0C46C4',
            opacity: 0.7,
            width: '30%',
            borderRadius: 5,
            marginRight: 30,
          }}
          disabled={saving}
          onPress={handleSubmit}>
          <Text style={[styles.stdNameAndMarksText, {textAlign: 'center'}]}>
            {!saving ? (
              'Submit'
            ) : (
              <ActivityIndicator size="small" color="#fff" />
            )}
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
          <View style={styles.studentRow}>
            <Text style={[styles.studentName, {color: '#0C46C4'}]}>
              Total Marks
            </Text>
            <TextInput
              style={[styles.marksInput, {borderColor: '#0C46C4'}]}
              keyboardType="numeric"
              value={totalMarks}
              onChangeText={setTotalMarks}
            />
          </View>
          {students.map(student => (
            <View key={student.id} style={styles.studentRow}>
              <Text style={styles.studentName}>{student.name}</Text>
              <TextInput
                style={styles.marksInput}
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
    width: '20%',
    borderWidth: 1,
    padding: 2,
    marginRight: 25,
    borderRadius: 3,
  },
});

export default AddMarksScreen;
