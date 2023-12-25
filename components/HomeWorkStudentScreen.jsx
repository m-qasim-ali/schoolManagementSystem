import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const HomeWorkStudentScreen = () => {
  const [myState, setMyState] = React.useState({
    questionLink: 'Here is Question Link To Download',
    questionDetails:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem' +
      'aliquid dolor magnam incidunt ad vitae animi, delectus aperiam' +
      'veritatis hic quod quibusdam reprehenderit, cupiditate voluptatem' +
      'quo accusantium accusamus tempora nam suscipit ducimus vero.' +
      'Commodi, possimus. Est veniam sequi molestias ad quisquam, unde a' +
      'rerum enim maxime officia aspernatur quae atque.',
  });
  return (
    <View style={styles.parentView}>
      <View style={{gap: 20, padding: 10}}>
        <View>
          <Text style={styles.screenText}>{myState.questionLink}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{myState.questionDetails}</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.sendButtonOpacity}
            onPress={() => {
              console.log('Button is clicked');
            }}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeWorkStudentScreen;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    marginTop: 30,
  },
  card: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '100',
    color: 'black',
  },
  answerDisplayCard: {
    borderWidth: 1,
  },

  screenText: {
    color: '#0C46C4',
    fontWeight: '600',
  },
  sendButtonOpacity: {
    backgroundColor: '#0C46C4',
    width: '80%',
    borderRadius: 10,
  },
  sendButtonText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
