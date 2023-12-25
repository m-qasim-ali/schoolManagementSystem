import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ResultScreen() {
  return (
    <View style={styles.parentView}>
      <TouchableOpacity
        style={[styles.publishTextOpacity, styles.cardView]}
        onPress={() => {}}>
        <Text style={styles.terminalResultText}>First Terimal Result</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.publishTextOpacity, styles.cardView]}
        onPress={() => {}}>
        <Text style={styles.terminalResultText}>Second Terimal Result</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.publishTextOpacity, styles.cardView]}
        onPress={() => {}}>
        <Text style={styles.terminalResultText}>Final Terimal Result</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },

  cardView: {
    borderRadius: 8,
    padding: 16,
    height: 100,
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
    textAlign: 'center',
    fontSize: 20,
  },
  publishTextOpacity: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
  },
});

export default ResultScreen;
