import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import generateRandomPassword from '../utils/generatePassword';

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

const createStudentInDb = (
  uid,
  fullName,
  email,
  rollNo,
  role,
  cls,
  teacherName,
  imageUrl, // Add imageUrl to the arguments
) => {
  return firestore().collection('students').doc(uid).set(
    {
      uid,
      fullName,
      email,
      rollNo,
      role,
      cls,
      teacherName,
      imageUrl,
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

const registerStudent = async (
  fullName,
  email,
  rollNo,
  cls,
  photo,
  teacherName,
) => {
  try {
    const password = generateRandomPassword(6);
    console.log(password);
    const cred = await auth().createUserWithEmailAndPassword(email, password);
    const {uid} = cred.user;

    await auth().currentUser.updateProfile({
      displayName: fullName,
    });

    const imageRef = storage().ref(`/profile_images/${uid}`);
    await imageRef.putFile(photo); // Assuming photo is the local URI of the image

    const imageUrl = await imageRef.getDownloadURL();

    await createStudentInDb(
      uid,
      fullName,
      email,
      rollNo,
      'student',
      cls,
      teacherName,
      imageUrl,
    );

    const text = `Hello ${fullName},\n\nWelcome to Your App! Your registration is successful.\n\nUsername: ${fullName}\nEmail: ${email}\Password: ${password}\nClass: ${cls}\n\nThank you for joining us!`;
    await sendEmail(email, 'Successful Registration', text);
  } catch (err) {
    throw err;
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
  try {
    console.log('sudent...');
    const res = await auth().signInWithEmailAndPassword(email, password);

    const userUid = res.user.uid;

    const userDoc = await firestore().collection('students').doc(userUid).get();

    if (!(userDoc.exists && userDoc.data().role == 'student')) {
      throw error('Invalid credientials');
    }
    console.log(userDoc.data());
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

// const sendWelcomeEmail = async (fullName, email, cls, password) => {
//   try {
//     const testAccount = await nodemailer.createTestAccount();
//     console.log(testAccount);
//     const transporter = nodemailer.createTransport({
//       host: testAccount.smtp.host,
//       port: testAccount.smtp.port,
//       secure: testAccount.smtp.secure,
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });

//     // Send welcome email
//     const info = await transporter.sendMail({
//       from: 'muhammadqasimali96@gmail.com',
//       to: email,
//       subject: 'Welcome to Your App!',
//       text: ,
//     });

//     // Log the message ID for testing (you can remove this in production)
//     console.log('Message sent: %s', info.messageId);
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//   } catch (err) {
//     throw err;
//   }
// };

async function sendEmail(to, subject, text) {
  const apiUrl =
    'https://qa-mailsender.netlify.app/.netlify/functions/api/send-email';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: to,
        subject: subject,
        text: text,
      }),
    });

    if (!response.ok) {
      throw Error('mail not send!');
    }
  } catch (error) {
    throw error;
  }
}



const Auth = {
  registerGuest,
  registerTeacher,
  signInTeacher,
  signInGuest,
  signInStudent,
  forgetPassword,
  signOut,
  getAllClasses,
  registerStudent,
  
};

export default Auth;
