import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const StudentResult = () => {
  const [resultInfo, setResultInfo] = useState({
    term: 'First',
    resultCard: [
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
  });
  const timeStamp = new Date(Date.now());

  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Term: {resultInfo.term}</Text>
          <Text style={styles.headerText}>
            Date: {timeStamp.getDate()}/{timeStamp.getMonth() + 1}/
            {timeStamp.getFullYear()}
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={styles.title}>Description</Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            voluptatum numquam placeat perspiciatis aspernatur nihil porro, quae
            officiis ea fugit doloribus ut repellendus modi aut sapiente magni
            vero! Modi delectus atque eaque sunt ipsa? Optio deserunt adipisci
            nisi ducimus iure ea maiores, officia eos, magnam hic id nesciunt
            doloremque, harum provident! Quaerat, deserunt laborum. Dolorem?
          </Text>
          <Text style={styles.title}>Result Card</Text>
          <View style={styles.customTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Course Name</Text>
              <Text style={styles.tableHeader}>Marks</Text>
              <Text style={styles.tableHeader}>Total Marks</Text>
            </View>
            {resultInfo.resultCard.map((course, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableData}>{course.course}</Text>
                <Text style={styles.tableData}>{course.marks}</Text>
                <Text style={styles.tableData}>{course.totalMarks}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Download Your Result</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0C46C4',
    width: '100%',
    opacity: 0.7,
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: '900',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0C46C4',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    marginVertical: 20,
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  customTable: {
    padding: 10,
    paddingTop:0,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:'#f7fcfb',
    borderColor: '#D3D3D3',
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

export default StudentResult;
