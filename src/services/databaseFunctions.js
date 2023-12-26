import firestore from '@react-native-firebase/firestore';
import {getFormattedDate} from '../utils/getFormattedDate';

const getStudentsByClass = async cls => {
  try {
    const querySnapshot = await firestore()
      .collection('students')
      .where('cls', '==', cls)
      .get();

    const students = [];
    querySnapshot.forEach(doc => {
      const student = doc.data();
      students.push(student);
    });

    return students;
  } catch (error) {
    throw error;
  }
};

const saveAttendanceInDb = async (cls, teacherUid, students) => {
  const date = getFormattedDate();

  try {
    const existingDocSnapshot = await firestore()
      .collection('attendances')
      .where('cls', '==', cls)
      .where('date', '==', date)
      .get();

    if (!existingDocSnapshot.empty) {
      const existingDocRef = existingDocSnapshot.docs[0].ref;
      await existingDocRef.update({
        students: students,
      });
    } else {
      await firestore().collection('attendances').doc().set({
        cls: cls,
        teacher: teacherUid,
        students: students,
        date: date,
      });
    }
  } catch (error) {
    throw error;
  }
};

const getAttendanceForClassAndDate = async (cls) => {
  try {
    const timestampDate = getFormattedDate();

    const querySnapshot = await firestore()
      .collection('attendances')
      .where('cls', '==', cls)
      .where('date', '==', timestampDate)
      .get();

    const attendanceData = [];
    querySnapshot.forEach(doc => {
      const attendance = doc.data();
      attendanceData.push(attendance);
    });

    return attendanceData;
  } catch (error) {
    throw error;
  }
};

const DBFunctions = {
  getStudentsByClass,
  saveAttendanceInDb,
  getAttendanceForClassAndDate,
};

export default DBFunctions;
