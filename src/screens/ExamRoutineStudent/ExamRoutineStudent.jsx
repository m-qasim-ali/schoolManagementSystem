import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {DBFunctions} from '../../services';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';
import {getFormattedDate} from '../../utils/getFormattedDate';

const ExamRoutineTeacher = props => {
  const [loading, setLoading] = useState(false);
  const assignmentFields = [
    'Assignment 1',
    'Assignment 2',
    'First Terminal ',
    'Assignment 3',
    'Assignment 4',
    'Second Terminal',
    'Final',
  ];

  const [myState, setMyState] = useState(null);

  const {cls} = props.route.params;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await DBFunctions.getRoutine(cls);
        if (res) {
          for (const key in res.routine) {
            res.routine[key] = new Date(
              res.routine[key].seconds * 1000 +
                res.routine[key].nanoseconds / 1e6,
            );
          }
          setMyState(res.routine);
        }
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (myState == null) {
    return <NoData title="Exam Routine not uploaded yet!" />;
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.classAndsectionHeader}>
          <Text style={styles.classAndDateHeaderText}>Class: {cls}</Text>
          <Text style={styles.classAndDateHeaderText}>
            Date: {getFormattedDate()}
          </Text>
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
              <Text style={{color: '#111'}}>
                {myState[field].toLocaleDateString()}
              </Text>
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

export default ExamRoutineTeacher;
