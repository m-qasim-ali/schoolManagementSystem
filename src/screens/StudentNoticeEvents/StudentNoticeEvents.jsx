import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import NoData from '../../components/NoData';
import Loader from '../../components/Loader';
import {DBFunctions} from '../../services';

function StudentNoticeEvents(props) {
  const [loading, setLoading] = React.useState(true);
  const [notices, setNotices] = React.useState([]);

  const {cls} = props.route.params.user;
  React.useEffect(() => {
    const getNotice = async () => {
      try {
        setLoading(true);
        const res = await DBFunctions.getAllNoticesByClass(cls);
        setNotices(res);
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };

    getNotice();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (notices.length == 0) {
    return <NoData title="No Notice Found!" />;
  }

  return (
    <View style={styles.parentView}>
      {notices.map((notice) => (
        <View key={notice.timestamp} style={styles.cardView}>
          <Text style={styles.terminalResultText}>{notice.title}</Text>
          <Text>{notice.description.slice(1, 100)} ...</Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ViewNotice', {notice})}
            style={styles.publishTextOpacity}>
            <Text style={styles.publishText}>View</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    gap: 20,
    marginTop: 50,
  },

  cardView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: '#0C46C4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3084,
    elevation: 5,
  },
  terminalResultText: {
    color: '#0C46C4',
    fontWeight: '900',
    marginBottom: 2,
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

export default StudentNoticeEvents;
