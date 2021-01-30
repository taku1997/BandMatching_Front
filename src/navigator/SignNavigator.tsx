import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TopPage from '../screens/ToppageScreen';
import Signin from '../screens/SigninScreen';
import Signup from '../screens/SignupScreen';


const SignNavigator = () => {

  const Stack = createStackNavigator() 

  return (
    <Stack.Navigator initialRouteName="TopPage">
      <Stack.Screen name="TopPage" component={TopPage} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default SignNavigator;