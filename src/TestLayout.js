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

class TestLayout extends React.Component {
  static navigationOptions = {
    title: "This is CardViewScreen"
  };
  render() {
    var { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerMain}>
          <View style={styles.headerBoxLeft}>
            <Text style={styles.textDay}>SUN</Text>
            <Text style={styles.textDate}>28</Text>
            <Text style={styles.textMonth}>OCT</Text>
          </View>
          <View style={styles.boxDivider} />
          <View style={styles.headerBoxRight}>
            <View style={styles.timebox}>
              <Text style={styles.timeText}>10:00 AM to 11:30 AM</Text>
            </View>
            <Text style={styles.meetingText}>Fortigo Meeting</Text>
            <Text style={styles.roomText}>Conference Room A</Text>
            <Text style={styles.companynameText}>Xelpmoc, Bangalore</Text>
          </View>
        </View>
      </View>
    );
  }
}
TestLayout.navigationOptions = {
  title: "Company Address"
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#EBECED"
  },
  headerMain: {
    height: 150,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    flexDirection: "row",
    elevation: 10,
    position: "relative"
  },

  headerBoxLeft: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center"
  },
  headerBoxRight: {
    flex: 7.8,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: "center"
  },
  boxDivider: {
    flex: 0.05,
    backgroundColor: "#e6e6e6",
    marginTop: 10,
    marginBottom: 10
  },

  textDay: {
    fontFamily: "raleway-light",
    fontSize: 20,
    color: "#333333",
    textAlign: "center"
  },
  textDate: {
    fontFamily: "raleway-bold",
    fontSize: 40,
    color: "#333333",
    textAlign: "center"
  },
  textMonth: {
    fontFamily: "raleway-light",
    fontSize: 20,
    color: "#333333",
    textAlign: "center"
  },
  timeText: {
    fontFamily: "raleway-light",
    fontSize: 15,
    color: "#333333",
    textAlign: "left"
  },
  timebox: {
    fontFamily: "raleway-light",
    backgroundColor: "#d6d6d6",
    width: 175,
    padding: 5
  },
  meetingText: {
    fontFamily: "raleway-bold",
    fontSize: 20,
    color: "#333333",
    textAlign: "left"
  },
  roomText: {
    fontFamily: "raleway-bold",
    fontSize: 15,
    color: "#333333",
    textAlign: "left"
  },
  companynameText: {
    fontFamily: "raleway-light",
    fontSize: 15,
    color: "#666666",
    textAlign: "left"
  },
});

export default TestLayout;
