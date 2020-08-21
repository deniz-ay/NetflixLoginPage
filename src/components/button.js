import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity
    onPress={props.onPress}
    style={{
      width:'75%',
      height:'20%',
      backgroundColor:'#171717',
      borderWidth:1,
      borderColor:'#2E2E2E',
      borderRadius:10,
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
      
      
      
    }}        
    >
      <Text style={{
        color:'white',
        fontSize:18
        }}> {props.text} </Text>
    </TouchableOpacity>
 
);

export default Button;
