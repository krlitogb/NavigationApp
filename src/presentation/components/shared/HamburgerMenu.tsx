
import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicon } from './Ionicon';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
 const navigation = useNavigation();

 useEffect( () => {
  navigation.setOptions( {
   headerLeft: () => (
    <Pressable 
     style={{
      paddingLeft: 5,
     }}
    onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
      <Ionicon name='menu-outline' color= { globalColors.primary }/>
     </Pressable>
    )
   } );
  }, [] )


  return (<></>);
};
