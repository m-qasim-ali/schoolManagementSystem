import {StyleSheet} from 'react-native';
const myStyle = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  View1: {flex: 1},
  View2: {
    backgroundColor: '#0C46C4',
    flex: 2,
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  Touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    top: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    color: 'white',
    top: 5,
    fontWeight: '900',
    width: '80%',
  },
});
export default myStyle;
