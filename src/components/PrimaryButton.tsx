import React from 'react';
import {View,Button } from 'react-native';

interface PrimaryButton {
  title: string,
  style: any,
  onPress: (any)
}

const PrimaryButton = (props: PrimaryButton) => {
  return (
    <View style={props.style}>
      <Button 
        title={props.title}
        color={"#fff"}
        onPress={props.onPress}
      />
    </View>
  )
}

export default PrimaryButton;


