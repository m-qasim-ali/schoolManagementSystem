import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import NoData from '../../components/NoData';
import Loader from '../../components/Loader';
import {DBFunctions} from '../../services';

function HomeWorkList(props) {
  const [loading, setLoading] = React.useState(true);
  const [assignments, setAssignments] = React.useState([]);

  const {cls} = props.route.params.user;
  const course = props.route.params.course;
  React.useEffect(() => {
    const getNotice = async () => {
      try {
        setLoading(true);
        const res = await DBFunctions.getAllAssignemntsByClass(cls, course);
        setAssignments(res);
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

  if (assignments.length == 0) {
    return <NoData title="No Assignement Found!" />;
  }

  return (
    <View style={styles.parentView}>
      <Text style={{paddingLeft: 20, fontSize: 20}}>
        Course:{'  '}
        <Text style={{marginLeft: 25, color: '#0C46C4', fontSize: 20}}>
          {course}
        </Text>
      </Text>
      {assignments.map((assignment, id) => (
        <View key={id} style={styles.cardView}>
          <Text style={styles.terminalResultText}>{assignment.title}</Text>
          <Text>{assignment.description.slice(1, 100)} ...</Text>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('ViewAssignment', {assignment})
            }
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
    marginTop: 20,
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

export default HomeWorkList;
