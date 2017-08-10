import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableHighlight,
  ScrollView,
  View,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import logoImg from './images/xelpmoc_logo.png';
import SharedPreferences from 'react-native-shared-preferences';
class ProfileScreen extends React.Component {
  state={
    name:''
  }
  componentDidMount(){
        SharedPreferences.getItem("keyname", function (value) {
      let usernme=value;
      console.log(value);
      
    });
    // AsyncStorage.getItem('keynamew').then((value) = console.log(value));
    AsyncStorage.getItem('keynamew').then((value) => this.setState({name:value}));
    

  }
  static navigationOptions = {
    title: 'Profile',
  };
  getSize() {
    return {
      width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
    }
  }

  render() {

    var { navigate } = this.props.navigation;
    return (

      <ScrollView>
        <View style={styles.container}>

          <View style={[styles.logo_layout, this.getSize()]}>
            <Image source={logoImg} style={styles.image} />
              <Text style={styles.profilename_txt}>{this.state.name}</Text>  
          </View>

          <View style={styles.card_layout}>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Name          :</Text>
              <Text style={styles.label_txt}>Irshad</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>MobileNumber  :</Text>
              <Text style={styles.label_txt}>8989765432</Text>
            </View>

          </View>

          <View style={styles.userCard_layout}>
            <Text style={styles.header_txt}>User Information</Text>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>User Name    :</Text>
              <Text style={styles.label_txt}>Mukesh</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>MobileNumber :</Text>
              <Text style={styles.label_txt}>8765678987</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Email        :</Text>
              <Text style={styles.label_txt}>mukesh@yahoo.in</Text>
            </View>

          </View>

          <View style={styles.userCard_layout}>
            <Text style={styles.header_txt}>Company Information</Text>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Name       :</Text>
              <Text style={styles.label_txt}>Nitin</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Type         :</Text>
              <Text style={styles.label_txt}>abc</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Email        :</Text>
              <Text style={styles.label_txt}>nitin@gmail.com</Text>
            </View>

          </View>

          <View style={styles.userCard_layout}>
            <Text style={styles.header_txt}>Owner Information</Text>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Name       :</Text>
              <Text style={styles.label_txt}>Mahesh</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>MobileNumber :</Text>
              <Text style={styles.label_txt}>9876789876</Text>
            </View>

            <View style={styles.card_content}>
              <Text style={styles.label_txt}>Email        :</Text>
              <Text style={styles.label_txt}>mahesh@gmail.com</Text>
            </View>

          </View>

        </View>
      </ScrollView>
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
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
    marginBottom: 10
  },
  logo_layout: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    margin: 10,

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 60,

  },
  profilename_txt: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 20
  },
  card_layout: {
    flexDirection: 'column',
    width: 350,
    height: 100,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
  },
  card_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userCard_layout: {
    flexDirection: 'column',
    width: 350,
    height: 150,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
  },
  label_txt: {
    color: 'black',
    fontSize: 15,
    marginTop: 10
  },
  header_txt: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
})


export default ProfileScreen;
