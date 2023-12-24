import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import myStyle from './style';
import {useNavigation} from '@react-navigation/native';
import {selectUser} from '../../store/userSlice';
import {useSelector} from 'react-redux';

const Main = () => {
  const user = useSelector(selectUser);
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      const replace = user ? "Home": "SelectionRole"
      navigation.replace();
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}>
        <View style={myStyle.View1_1}></View>
      </View>
      <View style={myStyle.View2}>
        <Image source={require('./../../../Assests/images/MainLogo.png')} />
      </View>
      <View style={myStyle.View3}>
        <Text style={myStyle.Text}>Powered By Comsats</Text>
      </View>
    </View>
  );
};
export default Main;
