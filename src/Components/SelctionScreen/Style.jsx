import { StyleSheet } from 'react-native';
const myStyle = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  View1: {
    flex: 2,
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
    flex: 3,
    width: '100%',
  },
  Text: {
    alignSelf: 'center',
    color: '#0C46C4',
    top: -15,
  },
  View2_1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  touchable1: {
    padding: 25,
    paddingTop: 15,
  },
  touchView: {
    backgroundColor: '#0C46C4',
    padding: 25,

    borderRadius: 20,
  },
  touchText: {
    alignSelf: 'center',
  },
});
export default myStyle;