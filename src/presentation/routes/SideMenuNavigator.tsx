import { Text, useWindowDimensions, View } from 'react-native';
import {
 createDrawerNavigator,
 DrawerContentComponentProps,
 DrawerContentScrollView,
 DrawerItemList
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors, globalStyles } from '../theme/theme';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { Ionicon } from '../components/shared/Ionicon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

 const dimensions = useWindowDimensions();

 return (
  <Drawer.Navigator

   drawerContent={ ( props ) => <CustumDrawerContent { ...props } /> }

   screenOptions={ {
    headerShown: false,
    drawerType: ( dimensions.width >= 758 ) ? 'permanent' : 'slide',

    drawerActiveBackgroundColor: globalColors.primary,
    drawerActiveTintColor: 'white',
    drawerInactiveTintColor: globalColors.primary,
    drawerItemStyle: {
     borderRadius: 100,
     paddingHorizontal: 20,
    }
   } }
  >
   {/* <Drawer.Screen name="StrackNavigator" component={ StackNavigator } /> */ }
   <Drawer.Screen options={ { drawerIcon: ( { color } ) => ( <Ionicon name='arrow-forward-outline' color={ color } />)}} name="Tabs" component={ BottomTabNavigator } />
   <Drawer.Screen options={ { drawerIcon: ( { color } ) => ( <Ionicon name='person-circle-outline' color={ color } />)}} name="Profile" component={ ProfileScreen } />
  </Drawer.Navigator>
 );
};


const CustumDrawerContent = ( props: DrawerContentComponentProps ) => {

 return (
  <DrawerContentScrollView>
   <View
    style={ {
     height: 200,
     backgroundColor: globalColors.primary,
     margin: 30,
     borderRadius: 50,
    } }
   />

   <DrawerItemList { ...props } />

  </DrawerContentScrollView>
 );
};