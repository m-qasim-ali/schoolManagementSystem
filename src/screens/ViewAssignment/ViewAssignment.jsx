import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  PermissionsAndroid,
} from 'react-native';
import RNFS from 'react-native-fs';

function ViewAssignment(props) {
  const assignment = props.route.params.assignment;

  return (
    <View style={styles.parentView}>
      <Text style={styles.terminalResultText}>{assignment.title}</Text>
      <Text>{assignment.description}</Text>
      <Image
        source={{
          uri: assignment.fileUrl,
        }}
        style={{width: '100%', height: 200, marginTop: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    marginVertical: 50,
    marginHorizontal: 20,
  },

  terminalResultText: {
    color: '#0C46C4',
    fontWeight: '900',
    marginBottom: 2,
    fontSize: 20,
  },
  publishTextOpacity: {
    backgroundColor: '#0C46C4',
    width: '30%',
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  publishText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ViewAssignment;
