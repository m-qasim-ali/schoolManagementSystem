import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ResultStudentScreen = () => {
  const [myState, setMyState] = React.useState({
    terminalFirst: [
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '40', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '40', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '40', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '40', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
    ],

    terminalSecond: [
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '10', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '10', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '10', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
      {course: 'Science', marks: '10', totalMarks: '100'},
      {course: 'Maths', marks: '10', totalMarks: '100'},
      {course: 'English', marks: '50', totalMarks: '100'},
    ],
    disableView: false,
    disableView2: false,
  });

  const onViewPress = () => {
    setMyState(prevState => ({
      ...prevState,
      disableView: !prevState.disableView,
    }));
  };

  const onViewPressSecond = () => {
    setMyState(prevState => ({
      ...prevState,
      disableView2: !prevState.disableView2,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.parentView}>
        <View style={styles.cardHoldingView}>
          <View style={styles.card}>
            <View>
              <Text style={[styles.cardTitleText, {marginBottom: 5}]}>
                First Terminal
              </Text>

              {myState.disableView ? (
                <Text>View is Disabled</Text>
              ) : (
                <View style={styles.customTable}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Course Name</Text>
                    <Text style={styles.tableHeader}>Marks</Text>
                    <Text style={styles.tableHeader}>Total Marks</Text>
                  </View>
                  {myState.terminalFirst.map((course, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.tableData}>{course.course}</Text>
                      <Text style={styles.tableData}>{course.marks}</Text>
                      <Text style={styles.tableData}>{course.totalMarks}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <TouchableOpacity
              style={styles.viewResultOpacity}
              onPress={onViewPress}>
              <Text style={styles.viewOpacityText}>View</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={[styles.cardTitleText, {marginBottom: 5}]}>
                Second Terminal
              </Text>

              {myState.disableView2 ? (
                <Text>View is Disabled</Text>
              ) : (
                <View style={styles.customTable}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Course Name</Text>
                    <Text style={styles.tableHeader}>Marks</Text>
                    <Text style={styles.tableHeader}>Total Marks</Text>
                  </View>
                  {myState.terminalSecond.map((course, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.tableData}>{course.course}</Text>
                      <Text style={styles.tableData}>{course.marks}</Text>
                      <Text style={styles.tableData}>{course.totalMarks}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <TouchableOpacity
              style={styles.viewResultOpacity}
              onPress={onViewPressSecond}>
              <Text style={styles.viewOpacityText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginBottom: 100,
  },
  parentView: {
    flex: 1,
  },
  cardHoldingView: {
    marginTop: 30,
    gap: 20,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardTitleText: {
    color: '#0C46C4',
    fontWeight: '900',
    fontSize: 12,
  },
  viewResultOpacity: {
    backgroundColor: '#0C46C4',
    width: '30%',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewOpacityText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    padding: 5,
  },
  customTable: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 5,
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableData: {
    flex: 1,
  },
});

export default ResultStudentScreen;
