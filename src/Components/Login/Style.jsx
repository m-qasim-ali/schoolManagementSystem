import {StyleSheet} from 'react-native';
const myStyle = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  View1: {
    height:300,
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
    flex: 1,
    width: '100%',
    gap: 20,
    bottom:20
  },
  View2_1: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    gap: 15,
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
  },
  View2_2: {
    flex: 1,
    width: '80%',
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
  View_2_2_1: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,
  },
  touchable2_1Text: {
    alignSelf: 'center',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
  },
  touchable1Text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  touchable2_2Text: {
    alignSelf: 'center',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#0C46C4',
  },
});
export default myStyle;
