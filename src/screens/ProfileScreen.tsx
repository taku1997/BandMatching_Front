import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = () => {
  return(
    <View style={styles.root}>
      <Text style={styles.message}>Profile</Text>
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

export default Profile;