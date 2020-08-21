import React, { Component } from 'react';
import { View, Text, SafeAreaView,StatusBar,Image,StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Input from './src/components/input';
import Button from './src/components/button';

export default class App extends Component {
   state={
     userName:'',
     password:''
   }

  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#171717'}}>
      <ScrollView contentContainerStyle={{flex:1}} >
      <StatusBar barStyle='light-content'  />
      
      <View style={styles.logoView}>
         <Image source={require('./src/img/netflixLogo.png')} 
         style={styles.logo} />  
      </View>


      <View style={styles.formView}>
        <Input
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={this.state.userName}
        onChangeText={(userName)=>this.setState({userName})}
        style={{          
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          marginBottom:3       
        }} 
        />

         <Input
        placeholder={'Password'}
        secureTextEntry
        onChangeText={(password)=>this.setState({password})} // custom componentimizden verileri aldık ve gerekli state güncellendi.
        style={{          
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,}} 
        />

         <Button
         onPress={()=>{
           // butona tıklandığında yapılacak işlemler
           console.log('veriables:',this.state.userName,this.state.password)
         }}
           text={'Log In'}

         />      

        
      </View>

      
      <View style={styles.clickableTextView}>
         <TouchableOpacity style={{marginTop:20}}>
         <Text style={styles.clickableWhiteText}> Not a member yet? Start your free month!</Text>
         </TouchableOpacity >
         <TouchableOpacity style={{marginTop:20}}>
         <Text style={styles.clickableGrayText}> Forgot your password? </Text>
         </TouchableOpacity>
      </View>

      </ScrollView>

      </SafeAreaView>
  
    );
  }
}

const styles=StyleSheet.create({
  logoView:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end'
  },

  logo:{
    width:'85%',
    height:'50%',
  },
  formView:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center'
  },
  clickableTextView:{
    flex:1,
    alignItems:'center'
  },
  clickableWhiteText:{
    color:'white',
    fontWeight:'bold',
    fontSize:15,
  },
  clickableGrayText:{
    color:'#686868',
    fontSize:15, 
  },


})

