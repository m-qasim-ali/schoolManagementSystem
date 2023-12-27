import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {PaperProvider} from 'react-native-paper';
import {
  AddStudent,
  ExamRoutineTeacher,
  HomeWorkList,
  HomeWorkStudent,
  HomeWorkTeacher,
  ResultStudent,
  SolutionsTeacher,
  StudentAttendance,
  StudentDashboard,
  ViewNotice,
} from './src/screens';
import NoticeAndEvent from './src/screens/NoticeAndEvents/NoticeAndEvents';

function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </Provider>
      {/* <ResultStudent /> */}
    </>
  );
}
export default App;
