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
      <View>
        <Text>this is CardView screen, Exmaple of Cardview</Text>
        <View style={styles}>
          {/* <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}> */}
          <View style={styles.mainCaontaine}>
            <View style={ styles.container }>
              <Text style={styles.texttest}>Conference Room Name</Text>
              <Text style={styles.companyName}>ABC Tech</Text>
              <Text style={styles.addressText}>Bangalore</Text>
            </View>
            </View>
          {/* </CardView> */}
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
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    paddingTop:10
  },


  padding10: {
    padding: 10
  },

  texttest: {
    fontFamily: "RobotoLight",
    fontSize: 20,
    color: "#333333",
  },
    conferenceRoom: {
    fontFamily: "RobotoBold",
    fontSize:15,
    color: "#333333",
    marginTop: 5
  },
    companyName: {
    fontFamily: "RobotoBold",
    fontSize:15,
    color: "#666666",
  },
    addressText: {
    fontFamily: "RobotoLight",
    fontSize:15,
    color: "#666666",
    marginTop: 5
  },
  mainCaontaine:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    paddingTop:10,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffffff'

  }
  //  npm insta}ll react-native-cardview --save
  //  react-native link react-native-cardview
  //  https://www.npmjs.com/package/react-native-cardview
});

export default CardViewScreen;
