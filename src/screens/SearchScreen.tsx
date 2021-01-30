
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Search = () => {
  return(
    <View style={styles.root}>
      <Text style={styles.message}>Search</Text>
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

export default Search;