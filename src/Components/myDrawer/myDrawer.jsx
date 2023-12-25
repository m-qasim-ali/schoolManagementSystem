import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import CustomDrawerContent from '../CustomComponents/CustomDrawerContent';
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName='StudentDashboard'
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="StudentDashboard"
          component={StudentDashboard}
          options={{
            headerTransparent: true,
            title: '',
            headerTintColor: 'white',
          }}
        />
      </Drawer.Navigator>
    </>
  );
};
export default MyDrawer;
