// CustomDrawerContent.js

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import myStyle from './Style';

const CustomDrawerContent = ({navigation}) => {
  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <View style={myStyle.mainView}>
      <View style={myStyle.View1}></View>
      <View style={myStyle.View2}>
        <TouchableOpacity
          style={myStyle.Touchable}
          onPress={() => navigateToScreen('StudentDashboard')}>
          <Image source={require('../../Assests/Images/School.png')} />
          <Text style={myStyle.text}>Profile of School</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.Touchable}
          onPress={() => navigateToScreen('StudentDashboard')}>
          <Image source={require('../../Assests/Images/UsNews.png')} />
          <Text style={myStyle.text}>Profile of Publication</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.Touchable}
          onPress={() => navigateToScreen('StudentDashboard')}>
          <Image source={require('../../Assests/Images/OfficePhone.png')} />
          <Text style={myStyle.text}>Emergency Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.Touchable}
          onPress={() => navigateToScreen('StudentDashboard')}>
          <Image source={require('../../Assests/Images/Automatic.png')} />
          <Text style={myStyle.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.Touchable}
          onPress={() => navigateToScreen('StudentDashboard')}>
          <Image source={require('../../Assests/Images/Exit.png')} />
          <Text style={myStyle.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
