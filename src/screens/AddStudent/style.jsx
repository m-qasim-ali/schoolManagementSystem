import {StyleSheet} from 'react-native';
const myStyle = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  View1: {
    height: 300,
    width: '110%',
    backgroundColor: '#28C2A0',
    borderRadius: 350,
    position: 'relative',
    top: -100,
    left: -15,
  },
  View1_1: {
    backgroundColor: 'white',
    width: '40%',
    aspectRatio: 1,
    borderRadius: 100,
    position: 'absolute',
    bottom: -70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  View2: {gap: 20},
  View2_1: {flex: 1, alignSelf: 'center', width: '90%', gap: 10},
  textInput: {borderWidth: 1, borderColor: '#0C46C4', borderRadius: 5},
});
export default myStyle