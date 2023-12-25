import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ResultScreen() {
  return (
    <View style={styles.parentView}>
      <View style={styles.cardView}>
        <Text style={styles.terminalResultText}>First Terimal Result</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          laborum fugiat voluptatibus suscipit nesciunt delectus illo dolorem
          ipsa corporis sit soluta aperiam, vero iure dolores pariatur. Ullam,
          qui quaerat? Voluptas, dignissimos autem!
        </Text>

        <TouchableOpacity style={styles.publishTextOpacity}>
          <Text style={styles.publishText}>Publish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardView}>
        <Text style={styles.terminalResultText}>Second Terimal Result</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          laborum fugiat voluptatibus suscipit nesciunt delectus illo dolorem
          ipsa corporis sit soluta aperiam, vero iure dolores pariatur. Ullam,
          qui quaerat? Voluptas, dignissimos autem!
        </Text>

        <TouchableOpacity style={styles.publishTextOpacity}>
          <Text style={styles.publishText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    gap: 20,
  },

  cardView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
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
  },
  publishTextOpacity: {
    backgroundColor: '#0C46C4',
    width: '40%',
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 5,
  },
  publishText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ResultScreen;
