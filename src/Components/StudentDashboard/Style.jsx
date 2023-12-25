import {StyleSheet} from 'react-native';
const myStyle = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  View1: {
    height: 250,
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
    width: 120,
    height: 150,
  },
  View2: {
    flex: 1,
    width: '100%',
    gap: 13,
  },
  View2_1: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0C46C4',
    borderRadius: 10,
    padding: 6,
  },
  Text2_11: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Text2_12: {
    fontSize: 14,
    color: 'white',
  },
  Text2_13: {
    marginLeft: 8,
    fontSize: 12,
    color: 'white',
  },
  View2_2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '90%',
    alignSelf: 'center',
    gap: 15,
  },
  View2_2_1: {
    flex: 1, // Equal flex for each child
    padding: 15,
    backgroundColor: 'rgba(40, 194, 160, 0.1)',
    borderRadius: 10,
    alignItems: 'center',
  },

  Image2_2_1: {width: 50, height: 50},
  Text2_2_1: {
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    gap: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 95,
    paddingRight: 95,
  },
  modalText: {
    marginBottom: 15,
  },
});
export default myStyle;
