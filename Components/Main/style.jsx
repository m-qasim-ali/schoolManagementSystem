import {StyleSheet} from 'react-native'
const myStyle = StyleSheet.create( {
  mainView: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  View1: {
    flex: 1,
    width: '100%',
  },
  View1_1: {
    backgroundColor: '#28C2A0',
    width: '50%',
    flex: 2,
    borderRadius: 400,
    borderBottomLeftRadius: 0,
    top: -115,
    left: -10,
  },
  View2: {
    flex: 2,
    justifyContent: 'center',
  },
  View3: {
    flex: 1,
    backgroundColor: '#0C46C4',
    width: '108.5%',
    borderRadius: 300,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: 70,
  },
  Text: {
    alignSelf: 'center',
    color: 'white',
    top: 40,
  },
});
export default myStyle;