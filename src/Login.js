import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import logoImg from './images/xelpmoc_logo.png';
import usernameImg from './images/username.png';
import passwordImg from './images/password.png';
import eyeImg  from './images/eye_black.png';
import UserInput from './UserInput';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
        showPass:true,
    };
    this.showPass=this.showPass.bind(this);
  }
  showPass(){
    this.state.press === false ? this.setState({showPass:false,press : true}) : this.setState({showPass : true,press : false});
  }

  static navigationOptions = {
    title: 'Login',
  };
  render() {
    var { navigate } = this.props.navigation;
    return (
      <View	style={styles.container}>

      <View style={[styles.subcontainer,styles.logo_layout]}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.signIntext}>SignIn</Text>
      </View>

      <View style={[styles.subcontainer,styles.signin_layout]}>
          <UserInput source={usernameImg}
          placeholder='Username'
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          underlineColorAndroid='transparent'/>

          <UserInput source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder='Password'
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          underlineColorAndroid='transparent'/>


          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnEye}
            onPress={this.showPass}>
             <Image source={eyeImg} style={styles.iconEye} />
          </TouchableOpacity>
          </View>

          <View style={[styles.subcontainer,styles.signbtn_layout]}>
          <TouchableOpacity style={styles.button}
            onPress={this._onPress} >
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          </View>


      <View style={[styles.subcontainer,styles.signup_layout]}>
      <Text style={styles.signIntext}
        onPress={() => navigate('SignUp',{})}>Create Account</Text>
      <Text style={styles.signIntext}>Forgot Password?</Text>
    </View>
</View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FFFFFF',
  	},
    subcontainer:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
    signup_layout:{
    top: 10,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
  },
    image: {
      width: 80,
      height: 80,
    },
    btnEye: {
      position: 'absolute',
      padding:10,
      top:82.5,
      right: 28,
    },
  iconEye: {
    width:25,
  height: 25,
  tintColor: 'rgba(0,0,0,0.2)',
},
signIntext: {
  color: 'black',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  marginTop: 20,
},
text: {
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
},	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2196F3',
    width:200,
    borderRadius:30,
		height: MARGIN,
	}
})
export default Login;
