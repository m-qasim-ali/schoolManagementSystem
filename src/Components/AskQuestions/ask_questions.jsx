import React,{useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

const AskQuestion = () => {
    const [inputValue, setInputValue] = useState('');

  return(
    <View style={{backgroundColor:'white', flex:1}}>
      <View style={styles.appBar}>
      <View style={{flexDirection:'row', columnGap:25}}>
        <Image source={require('./assets/Exam.png')}></Image>
        <Text style={styles.text}>ASK QUESTION</Text>
      </View>
      </View>
      <Text style={{fontSize:20,fontWeight:'400', color:"black", margin:10}}>Ask Your Question Below</Text>
      <TextInput
  style={styles.input}
  value={inputValue}
  onChangeText={(text) => setInputValue(text)}
  placeholder="Type something..."
  underlineColorAndroid="transparent"
  
/>

<View style={styles.buttonUpload}>
  <TouchableOpacity onPress={()=>{}}>
    <Text>Upload File</Text>
  </TouchableOpacity>
</View>


<View style={styles.button}>
<TouchableOpacity onPress={()=>{}}>
  <Text>Ask Question</Text>
</TouchableOpacity>
</View>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonUpload: {
    width: '40%', 
    height: 40,  
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:40,
    marginBottom:70
  },
   input: {
    width: '70%',
    height: '40%', 
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    fontSize: 16,
    margin:50,
    color: 'black', // Text color

  },
  
  button: {
    width: '70%', 
    height: 40, 
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginBottom:20,
    bottom: 20, 
    left: '15%', 
    borderRadius: 5,
  },
  appBar:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    height:90,
    backgroundColor:'#0C46C4'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color:'white'
  },
});


export default AskQuestion;