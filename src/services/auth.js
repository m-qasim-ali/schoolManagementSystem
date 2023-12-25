import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createTeacherInDb = (uid, fullName, email, role, cls) => {
  return firestore().collection('teachers').doc(uid).set(
    {
      uid,
      fullName,
      email,
      role,
      cls,
    },
    {
      merge: true,
    },
  );
};

const createGuestInDb = (uid, fullName, email, role) => {
  return firestore().collection('guests').doc(uid).set(
    {
      uid,
      fullName,
      email,
      role,
    },
    {
      merge: true,
    },
  );
};

// const signUp = async (fullName, email, password) => {
//   if (!fullName || !email || !password) {
//     Alert.alert('Error', 'Please enter all fields');
//   }

//   try {
//     const cred = await auth().createUserWithEmailAndPassword(email, password);
//     const {uid} = cred.user;

//     auth().currentUser.updateProfile({
//       displayName: fullName,
//     });
//     const uid_1 = uid;
//     await createUserInDb(uid_1, fullName, email);
//   } catch (err) {
//     return Alert.alert(err.code, err.message);
//   }
// };

const registerTeacher = async (fullName, email, password, cls) => {
  if (!fullName || !email || !password || !cls) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    const cred = await auth().createUserWithEmailAndPassword(email, password);
    const {uid} = cred.user;

    auth().currentUser.updateProfile({
      displayName: fullName,
    });
    const uid_1 = uid;
    await createTeacherInDb(uid_1, fullName, email, 'teacher', cls);
  } catch (err) {
    return Alert.alert(err.code, err.message);
  }
};

const registerGuest = async (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    const cred = await auth().createUserWithEmailAndPassword(email, password);
    const {uid} = cred.user;

    auth().currentUser.updateProfile({
      displayName: fullName,
    });
    const uid_1 = uid;
    await createGuestInDb(uid_1, fullName, email, 'guest');
  } catch (err) {
    return Alert.alert(err.code, err.message);
  }
};

// const signIn = async (email, password) => {
//   if (!email || !password) {
//     Alert.alert('Error', 'Please enter all fields');
//   }

//   try {
//     await auth().signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     return Alert.alert(err.code, err.message);
//   }
// };

const signInTeacher = async (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const userUid = res.user.uid;

    const userDoc = await firestore().collection('teachers').doc(userUid).get();
    console.log(userDoc);

    if (!(userDoc.exists && userDoc.data().role == 'teacher')) {
      throw error('Invalid credientials');
    }

    return userDoc.data();
  } catch (err) {
    throw err;
  }
};

const getAllClasses = async () => {
  try {
    const querySnapshot = await firestore().collection('teachers').get();

    const classList = [];

    querySnapshot.forEach(doc => {
      // Get data from each document and add it to the list
      const classData = doc.data().cls;
      classList.push(classData);
    });

    console.log('All teachers:', classList);
    return classList;
  } catch (error) {
    throw error;
  }
};

const signInGuest = async (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const userUid = res.user.uid;

    const userDoc = await firestore().collection('guests').doc(userUid).get();

    if (!(userDoc.exists && userDoc.data().role == 'guest')) {
      throw error('Invalid credientials');
    }

    return userDoc.data();
  } catch (err) {
    throw err;
  }
};

const signInStudent = async (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    const res = await auth().signInWithEmailAndPassword(email, password);

    const userUid = res.user.uid;

    const userDoc = await firestore().collection('students').doc(userUid).get();

    if (!(userDoc.exists && userDoc.data().role == 'student')) {
      throw error('Invalid credientials');
    }

    return userDoc.data();
  } catch (err) {
    throw err;
  }
};

const forgetPassword = async email => {
  if (!email) {
    Alert.alert('Error', 'Please enter email');
  }

  try {
    await auth().sendPasswordResetEmail(email);
  } catch (err) {
    throw err;
  }
};

const signOut = () => {
  return auth().signOut();
};

const Auth = {
  registerGuest,
  registerTeacher,
  signInTeacher,
  signInGuest,
  signInStudent,
  forgetPassword,
  signOut,
  getAllClasses,
};

export default Auth;
