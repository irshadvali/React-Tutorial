import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import CardView from "react-native-cardview";
import { StackNavigator } from "react-navigation";
import SVGImage from "react-native-svg-image";

class CardViewScreen extends React.Component {
  static navigationOptions = {
    title: "This is CardViewScreen"
  };
  render() {
    var { params } = this.props.navigation.state;
    return (
   
    <View style={{flex: 1}}>
     <View style={{flex: 0.9}}>
          <View style={styles.mainCaontaine}>

            <View style={styles.container}>
              <View style={styles.mainbox}>
                <View style={styles.boxLeft}>
                  <Text style={styles.textLeft}>Host Name   : </Text>
                </View>
                <View style={styles.boxRight}>
                 <Text style={styles.textRight}>Irshad Vali</Text>
                </View>
              </View>


              <View style={styles.mainbox}>
                <View style={styles.boxLeft}>
                  <Text style={styles.textLeft}>Room Name : </Text>
                </View>
                <View style={styles.boxRight}>
                 <Text style={styles.textRight}>Confrence A</Text>
                </View>
              </View>


              <View style={styles.mainbox}>
                <View style={styles.boxLeft}>
                  <Text style={styles.textLeft}>Comapny      : </Text>
                </View>
                <View style={styles.boxRight}>
                 <Text style={styles.textRight}>Xelpmoc Design And Tech</Text>
                </View>
              </View> 

              <View style={styles.mainbox}>
                <View style={styles.boxLeft}>
                  <Text style={styles.textLeft}>Location       : </Text>
                </View>
                <View style={styles.boxRight}>
                 <Text style={styles.textRight}>Bangalore</Text>
                </View>
              </View>
       
              <View style={styles.mainbox}>
                <View style={styles.boxLeft}>
                  <Text style={styles.textLeft}>Guest            : </Text>
                </View>
                <View style={styles.boxRight}>
                 <Text style={styles.textRight}>Sriram, Chitranjan, Manish,Sriram, Chitranjan, Manish,Sriram, Chitranjan, Manish,Sriram, Chitranjan, Manish,Sriram, Chitranjan, Manish</Text>
                </View>
              </View>
            </View>
          </View>
         
          </View>
          <View style={styles.bottomLay}>
          <View style={styles.bottomLayLeft}> <Text>Left</Text></View>
          <View style={styles.bottomLayRight}> <Text>Right</Text></View>
        {/* <Text>fixed footer</Text> */}
       </View>
        </View>
     
    );
  }
}
CardViewScreen.navigationOptions = {
  title: "Company Address"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  textLeft: {
    fontFamily: "RobotoBold",
    fontSize: 15,
    color: "#333333",
    
  },

  textRight: {
    fontFamily: "RobotoLight",
    fontSize: 15,
    color: "#000000",
    
  },

  mainCaontaine: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ffffff",

  },
  boxLeft: {
    flex: 0.3,
  },
  boxRight: {
    flex: 0.7,
  },
  mainbox: {
    flexDirection: "row",
  },
  bottomLay:{
    flex: 0.1,
    backgroundColor: '#d00000'
  },
  bottomLayLeft:{
    flex: 0.5,
  },
  bottomLayLeft:{
    flex: 0.5,
  }
  //  npm insta}ll react-native-cardview --save
  //  react-native link react-native-cardview
  //  https://www.npmjs.com/package/react-native-cardview
});

export default CardViewScreen;
