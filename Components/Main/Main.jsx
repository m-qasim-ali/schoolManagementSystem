import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import myStyle from './style';
import { useNavigation } from '@react-navigation/native';
const Main = () =>
{
    const navigation = useNavigation();
    useEffect( () =>
    {
        const timer = setTimeout( () =>
        {
            // Navigate to the next screen in the stack
            navigation.replace( 'Dashboard' );
        }, 2000 ); // 3000 milliseconds = 3 seconds

        // Clear the timer if the component unmounts before 3 seconds
        return () => clearTimeout( timer );
    }, [ navigation ] );
    return (
        <View style={ myStyle.mainView }>

            <View style={ myStyle.View1 }>
                <View style={ myStyle.View1_1 }></View>
            </View>
            <View style={ myStyle.View2 }>
                <Image source={ require( '../../Assests/Images/MainLogo.png' ) } />
            </View>
            <View style={ myStyle.View3 }>
                <Text style={ myStyle.Text }>Powered By Comsats</Text>
            </View>
        </View>
    );
};
export default Main;
