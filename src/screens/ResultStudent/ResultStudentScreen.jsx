import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {DBFunctions} from '../../services';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';

const ResultStudentScreen = props => {
  const [myState, setMyState] = React.useState(null);
  const [loading, setLoading] = useState(false);

  const {uid} = props.route.params.user;

  const transformedData = inputData =>
    inputData.reduce((result, item) => {
      const terminalKey = item.terminal;

      if (!result[terminalKey]) {
        result[terminalKey] = {
          isDisable: true,
          res: [],
        };
      }

      result[terminalKey].res.push({
        course: item.course,
        marks: item.marks,
        totalMarks: item.totalMarks,
      });

      return result;
    }, {});

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await DBFunctions.getStudentMarks(uid);
        if (res != null) {
          let filteredData = transformedData(res);
          setMyState(filteredData);
        }
      } catch (err) {
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (myState == null) {
    return <NoData title={'No Result uploaded yet!'} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.parentView}>
        <View style={styles.cardHoldingView}>
          {myState != null &&
            Object.entries(myState).map(([key, value], index) => (
              <View key={index} style={styles.card}>
                <View>
                  <Text style={[styles.cardTitleText, {marginBottom: 5}]}>
                    {key}
                  </Text>

                  {!myState[key].isDisable ? (
                    <Text>View is Disabled</Text>
                  ) : (
                    <View style={styles.customTable}>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Course Name</Text>
                        <Text style={styles.tableHeader}>Marks</Text>
                        <Text style={styles.tableHeader}>Total Marks</Text>
                      </View>
                      {myState[key].res.map((course, index) => (
                        <View key={index} style={styles.tableRow}>
                          <Text style={styles.tableData}>{course.course}</Text>
                          <Text style={styles.tableData}>{course.marks}</Text>
                          <Text style={styles.tableData}>
                            {course.totalMarks}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginBottom: 100,
  },
  parentView: {
    flex: 1,
  },
  cardHoldingView: {
    marginTop: 30,
    gap: 20,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardTitleText: {
    color: '#0C46C4',
    fontWeight: '900',
    fontSize: 12,
  },
  viewResultOpacity: {
    backgroundColor: '#0C46C4',
    width: '30%',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewOpacityText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    padding: 5,
  },
  customTable: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 5,
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableData: {
    flex: 1,
  },
});

export default ResultStudentScreen;
