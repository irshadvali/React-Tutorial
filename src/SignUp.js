import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Image,
  TextInput,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import logoImg from './images/xelpmoc_logo.png';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };
  render() {
    return (
      <View	style={styles.container}>

      <View style={styles.subcontainer,styles.logo_layout}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.signuptext}>SignUp</Text>
        </View>

        <TextInput style={styles.inputtxt_style}
        placeholder='Username'
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
        underlineColorAndroid='transparent'/>

        <TextInput style={styles.inputtxt_style}
        placeholder='MobileNumber'
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
        underlineColorAndroid='transparent'/>

        <TextInput style={styles.inputtxt_style}
        placeholder='Email'
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
        underlineColorAndroid='transparent'/>


        <TextInput style={styles.inputtxt_style}
        placeholder='Password'
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
        underlineColorAndroid='transparent'/>

        <TextInput style={styles.inputtxt_style}
        placeholder='Confirm Password'
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
        underlineColorAndroid='transparent'/>

        <TouchableOpacity style={styles.button}
          onPress={this._onPress} >
            <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
      backgroundColor:'#FFFFFF',
  	},
    logo_layout:{
        alignItems: 'center',
          justifyContent: 'center',
    },
    signin_layout:{
    alignItems:'center',
    },
    signbtn_layout:{
    alignItems:'center'
    },
    image: {
      width: 80,
      height: 80,
      marginTop:20
    },
signuptext: {
  color: 'black',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  marginTop: 40,
},
inputtxt_style:{
  width:300,
  height:40,
  color :'black',
  fontSize:15,
  textAlign:'left',
  backgroundColor:'#e9e9e9',
  borderRadius :30,
  padding:10,
  marginTop:10
},
text: {
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
},
button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2196F3',
    width:200,
    borderRadius:30,
		height: 40,
    marginTop:20
	}
})


export default SignUp;
