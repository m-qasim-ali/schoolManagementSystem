import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import NoData from '../../components/NoData';
import Loader from '../../components/Loader';
import {DBFunctions} from '../../services';

function ViewNotice(props) {
  const notice = props.route.params.notice;

  return (
    <View style={styles.parentView}>
      <Text style={styles.terminalResultText}>{notice.title}</Text>
      <Text>{notice.description}</Text>
      <Image
        source={{
          uri: notice.imageUrl,
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

export default ViewNotice;
