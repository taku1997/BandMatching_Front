import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Signup = ({navigation}) => {
  return(
    <View style={styles.root}>
      <Text style={styles.message}>Signup</Text>
      <Button 
         title="Go to Details"
         onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
  },
})

export default Signup;