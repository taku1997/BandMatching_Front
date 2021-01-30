import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import TabNavigator from './navigator/TabNavigator';
import SignNavigator from './navigator/SignNavigator';
import { getSignedIn } from './reducks/user/selectors';

const Root = () => {
  const selector = useSelector(state => state);
  const isSignedIn = getSignedIn(selector);

  return (
    <NavigationContainer>
      {isSignedIn == false ? (
        <SignNavigator />
        ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  )
}

export default Root;