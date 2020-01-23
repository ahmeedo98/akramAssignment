import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';
import CustomDrawerComponent from './src/component/layout/Drawer';
import MenuButton from './src/component/layout/MenuButton';
import Home from './src/component/screens/Home';
import Welcome from './src/component/screens/Welcome';

import './global';
import { HitTestResultTypes } from 'expo/build/AR';

 const MainNavigation = createDrawerNavigator(
   {
     Home: {
       screen: Home,
       navigationOptions: {
         drawerIcon: ({ tintColor }) => <Feather name="home" style={{ fontSize: 24, color: tintColor }} />,
       },
     },
     Setting: {
       screen: Home,
       navigationOptions: {
         drawerIcon: ({ tintColor }) => <Feather name="settings" style={{ fontSize: 24, color: tintColor }} />,
       },
     },
     // Picture: {
     //   screen: Home,
     //   navigationOptions: {
     //     drawerIcon: ({ tintColor }) => <Feather name="settings" style={{ fontSize: 24, color: tintColor }} />,
     //   },
     // },
   },
   {
     contentComponent: CustomDrawerComponent,
     drawerWidth: global.width * 0.3,
     contentOptions: {
       itemStyle: {
         justifyContent: 'center',
         paddingTop: 12,
         paddingLeft: 33,
         paddingBottom: 13,
         borderRadius: 80,
         marginLeft: 30,
         marginTop: 25,
         width: 50,
         height: 50,
         alignItems: 'center',
       },
       activeTintColor: '#542FAB',
       inactiveBackgroundColor: 'white',
       activeBackgroundColor: 'white',
     },
     drawerBackgroundColor: 'rgba(255,255,255,0.7)',
   }
 );
const StackNavigation = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Home: { screen: MainNavigation },
    // Setting: { screen: Setting },
    // Test: { screen: TestPage },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <MenuButton navigation={navigation} />,
    }),
  }
);
const App = createAppContainer(StackNavigation);

export default App;
