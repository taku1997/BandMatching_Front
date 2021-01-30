import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import TextForm from '../components/TextForm';
import PrimaryButton from '../components/PrimaryButton';
import { SigninAction } from '../reducks/user/actions';

const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

  const inputEmail = useCallback((event) => {
    setEmail(event);
  },[setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event);
  },[setPassword]);

  return(
    <View style={styles.root}>
      <Text style={styles.message}>Signin</Text>
      <View style={styles.textForm}>
        {/* <Text style={styles.textContent}>メールアドレス</Text> */}
        <TextForm 
          placeholder={"メールアドレス"}
          multiline={false}
          numberOfLines={1}
          onChangeText={inputEmail}
          value={email}
        />
      </View>
      <View style={styles.textForm}>
        {/* <Text style={styles.textContent}>パスワード</Text> */}
        <TextForm 
          placeholder={"パスワード（8文字以上）"}
          multiline={false}
          numberOfLines={1}
          onChangeText={inputPassword}
          value={password}
        />
      </View>
      <PrimaryButton
        title={"ログイン"}
        style={styles.buttonStyle}
        onPress={() => dispatch(SigninAction({uid:"0000",username:"takumi nishimura"}))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: 40,
    margin: 15,
    marginTop: 180
  },
  textForm: {
    margin: 13,
  },
  textContent: {
    fontSize: 15,
    margin: 15
  },
  buttonStyle: {
    margin: 15,
    padding: 6,
    borderRadius: 30,
    backgroundColor:'#5372c7'
  } 
})

export default Signin;