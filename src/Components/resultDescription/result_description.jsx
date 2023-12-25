import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ResultDescription = (props) => {
  const [getTerm, setTerm] = useState('First');
  const [resultUri, setResultUri] = useState('');
  const [getDate, setDate] = useState('12/02/2023');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.title}>
        <View style={ { flexDirection: 'row', columnGap: 160, width: '100%',alignSelf:'center' } }>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '900', color: 'white'}}>Term :</Text>
            <Text style={{color: 'white'}}>{getTerm}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '900', color: 'white'}}>Date :</Text>
            <Text style={{color: 'white'}}>{getDate}</Text>
          </View>
        </View>
      </View>
      <Text
        style={{fontSize: 25, fontWeight: '700', color: 'black', margin: 20}}>
        Description
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '400',
          color: 'black',
          margin: 30,
          marginTop: 10,
        }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        voluptatum numquam placeat perspiciatis aspernatur nihil porro, quae
        officiis ea fugit doloribus ut repellendus modi aut sapiente magni vero!
        Modi delectus atque eaque sunt ipsa? Optio deserunt adipisci nisi
        ducimus iure ea maiores, officia eos, magnam hic id nesciunt doloremque,
        harum provident! Quaerat, deserunt laborum. Dolorem?
      </Text>
      <Image
        source={require('../../Assests/Images/resultCard.png')}
        style={{
          marginLeft: 20,
          height: 200,
          width: '90%',
          borderRadius: 5,
        }}></Image>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Download Your Result
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    alignSelf: 'center',
    width: '80%',
    top: 30,
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#5a80f2',
  },
  appBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#0C46C4',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});

export default ResultDescription;
