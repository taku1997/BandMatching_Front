import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextInputProps {
  placeholder: string,
  multiline: boolean,
  numberOfLines: number,
  onChangeText: (any)
  value: string
}

const TextForm = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.textstyle}
      placeholder={props.placeholder}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}

const styles = StyleSheet.create({
  textstyle:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 2,
    borderRadius: 3,
  }
})

export default TextForm;
