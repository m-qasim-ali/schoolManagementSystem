import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
      {/* <Text>Hello</Text> */}
    </>
  );
}
export default App;
