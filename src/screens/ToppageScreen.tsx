import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const TopPage = ({navigation}) => {
  return(
    <View style={styles.root}>
      <View>
        <Image 
          style={{ width: 450, height: 400 }}
          source={{uri: "https://picsum.photos/600/600"}}
        />
        <Text style={styles.message}>バンドマッチングアプリ</Text>
        </View>
      <View>
        <View style={styles.buttonStyle}>
          <Button 
            title="新しく始める"
            color="#000"  
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View style={styles.buttonBottomStyle} >
          <Button 
            title="すでに登録されてる方へ"
            color="#000"
            onPress={() => navigation.navigate('Signin')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
  },
  buttonStyle: {
    margin: 8,
    padding: 6,
    backgroundColor: '#3fffff',
    borderRadius: 20
  },
  buttonBottomStyle: {
    margin: 8,
    padding: 5,
    backgroundColor: '#3fffff',
    borderRadius: 30,
    marginBottom: 20,
  }
})

export default TopPage;