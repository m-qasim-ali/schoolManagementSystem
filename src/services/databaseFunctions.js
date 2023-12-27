import firestore from '@react-native-firebase/firestore';
import {getFormattedDate} from '../utils/getFormattedDate';
import storage from '@react-native-firebase/storage';

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

const getAttendanceForClassAndDate = async cls => {
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

const getStudentAttendanceByUid = async studentUid => {
  try {
    const querySnapshot = await firestore().collection('attendances').get();

    const attendanceData = [];
    querySnapshot.forEach(doc => {
      const attendance = doc.data();
      const stuAttendance = attendance.students.find(
        stu => stu.id === studentUid,
      );

      if (stuAttendance) {
        const formattedDate = formatDateString(attendance.date);
        attendanceData.push({date: formattedDate, ...stuAttendance});
      }
    });

    // Sort attendanceData by date in ascending order
    attendanceData.sort((a, b) => new Date(a.date) - new Date(b.date));

    return attendanceData;
  } catch (error) {
    throw error;
  }
};

// Function to format date string from "day/month/year" to "year-month-day"
const formatDateString = dateString => {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};

const saveNoticeWithImage = async (title, description, cls, imageFile) => {
  try {
    const imageName = `notice_${Date.now()}.jpg`;
    const storageRef = storage().ref(`notices/${imageName}`);
    await storageRef.putFile(imageFile);
    const imageUrl = await storageRef.getDownloadURL();

    const noticeRef = firestore().collection('notices').doc();

    await noticeRef.set({
      title: title,
      description: description,
      cls: cls,
      imageUrl: imageUrl,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

const getAllNoticesByClass = async cls => {
  try {
    const querySnapshot = await firestore()
      .collection('notices')
      .where('cls', '==', cls)
      .get();

    const noticesData = [];
    querySnapshot.forEach(doc => {
      const notice = doc.data();
      noticesData.push(notice);
    });

    const sortedData = noticesData.slice().sort((a, b) => {
      return b.timestamp.toMillis() - a.timestamp.toMillis();
    });

    return sortedData;
  } catch (error) {
    throw error;
  }
};

const saveStudentMarks = async data => {
  try {
    const noticeRef = firestore().collection('marks').doc();
    await noticeRef.set({...data});
  } catch (error) {
    throw error;
  }
};

const getStudentMarks = async stuId => {
  try {
    const querySnapshot = await firestore().collection('marks').get();
    const res = [];
    querySnapshot.forEach(doc => {
      const document = doc.data();
      const data = document.students.filter(std => std.id === stuId);
      let marks = null;
      if (data.length != 0) {
        marks = data[0].marks;
      }
      delete document.students;
      res.push({...document, marks});
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const uploadAssignment = async data => {
  try {
    const storageRef = storage().ref(`assignments`);
    await storageRef.putFile(data.file);
    const fileUrl = await storageRef.getDownloadURL();

    const noticeRef = firestore().collection('assignments').doc();
    delete data['file'];
    await noticeRef.set({...data, fileUrl});
  } catch (error) {
    throw error;
  }
};

const getAllAssignemntsByClass = async (cls, course) => {
  try {
    const querySnapshot = await firestore()
      .collection('assignments')
      .where('cls', '==', cls)
      .get();

    const assignmentsData = [];
    querySnapshot.forEach(doc => {
      const notice = doc.data();
      if (notice.course == course) {
        assignmentsData.push(notice);
      }
    });

    return assignmentsData;
  } catch (error) {
    throw error;
  }
};

const uploadRoutine = async data => {
  try {
    const routineRef = firestore().collection('examRoutines').doc(data.cls);
    await routineRef.set(data, {merge: true});
  } catch (error) {
    throw error;
  }
};

const getRoutine = async cls => {
  try {
    const routineRef = firestore().collection('examRoutines').doc(cls);
    const routineSnapshot = await routineRef.get();

    if (routineSnapshot.exists) {
      const routineData = routineSnapshot.data();
      return routineData;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const DBFunctions = {
  getStudentsByClass,
  saveAttendanceInDb,
  getAttendanceForClassAndDate,
  getStudentAttendanceByUid,
  saveNoticeWithImage,
  getAllNoticesByClass,
  saveStudentMarks,
  uploadAssignment,
  getAllAssignemntsByClass,
  uploadRoutine,
  getRoutine,
  getStudentMarks,
};

export default DBFunctions;
