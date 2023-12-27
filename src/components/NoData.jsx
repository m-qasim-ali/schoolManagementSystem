import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoData = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subtitle}>Check back later for updates.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333', // Dark gray color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Medium gray color
    textAlign: 'center',
  },
});

export default NoData;
