import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Message from '../screens/MessageScreen';
import Profile from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Search: {screen: Search},
    Message: {screen: Message},
    Profile: {screen: Profile}
  }
)

const TabNavigator = () => {
  const Layout = createAppContainer(Tab);
  return (
    <Layout />
  )
}


export default TabNavigator;