import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {PaperProvider} from 'react-native-paper';
import {AddStudent} from './src/screens';

function App() {
  return (
    <>
      {/* <Provider store={store}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </Provider> */}
      {/* <Text>Hello</Text> */}
      <AddStudent />
    </>
  );
}
export default App;
