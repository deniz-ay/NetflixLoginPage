import React from 'react';
import { Text, View,TextInput } from 'react-native';

const Input = (props) => (

    <TextInput
        placeholderTextColor={'#707070'}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={(value)=> props.onChangeText(value) } //login page sayfasındaki alanına girilen textler gönderiliyor.
        style={[{
          width:'75%',
          height:'20%',
          backgroundColor:'#2E2E2E',
          padding:10,
          color:'white'
        },props.style
         ]}
        />
 
   

);

export default Input;
