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
    top: -120,
    left: -15,
  },
  View1_1: {
    backgroundColor: 'white',
    width: '50%',
    aspectRatio: 1,
    borderRadius: 100,
    position: 'absolute',
    bottom: -80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Image: {
    alignSelf: 'center',
    width: 120,
    height: 150,
  },
  View2: {
    width: '100%',
    display: 'flex',
    height: 525,
    justifyContent: 'space-around',
  },
  View2_1: {
    width: '80%',
    alignSelf: 'center',
    gap: 20,
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  View2_1_1: {
    display: 'flex',
    borderBottomWidth: 3,
    borderColor: '#B3B3B3',
    color: '#B3B3B3',
    flexDirection: 'row',
    padding: 0,
  },
  Textinput: {
    width: '90%',
    margin: 0,
    padding: 7,
  },
  text: {
    fontSize: 13,
  },
  View2_2: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    gap: 15,
  },
  touchable1: {
    width: '100%',
    backgroundColor: '#0C46C4',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 15,
  },
  touchable1Text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  View2_2: {width: '80%', alignSelf: 'center', gap: 10,
    height:100},
});
export default myStyle;
