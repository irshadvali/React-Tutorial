import React, { Component, props } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  View,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
import SharedPreferences from "react-native-shared-preferences";
import styles from "../Styles";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Example"
  };

  render() {
    SharedPreferences.setItem("keyname", "irshadvali");
    AsyncStorage.setItem("keynamew", "shaikh irshad vali");
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.scvwcontainer}>


      
        <ScrollView style={styles.scvwcontainer}>

        
        <TouchableHighlight onPress={() => navigate("TestLayout", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestLayout</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("Profile", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Profile With ScrollView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("List", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ListView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("sectionList", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Section ListView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("Grid", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GridView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("Login", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>LoginPage</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("SignUp", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>SignUp</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("JsonList", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>JsonList</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("WebViewExample", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>WebViewExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("ImageSliderView", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ImageSliderView</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("ImageInfoSlider", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ImageInfoSlider</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("MapScreen", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>MapScreen</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("GradientScreen", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GradientScreen</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("GradientList", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GradientList</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("MenuBarProfile", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>MenuBarProfile</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate("ActivityIndicatorExample", {})}
          >
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ActivityIndicatorExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate("AsyncStorageExample", {})}
          >
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>AsyncStorageExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("PopupDialogTest", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>PopupDialogTest</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("Movies", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Movies List Api</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("TestFile", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestFile List Api</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("FontTest", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Font Show </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("TestApiTwo", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestApiTwo </Text>
            </View>
          </TouchableHighlight>
     <TouchableHighlight onPress={() => navigate("TestReducer", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestReducer </Text>
            </View>
          </TouchableHighlight>
           <TouchableHighlight onPress={() => navigate("TestReducerTwo", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestReducerTwo </Text>
            </View>
          </TouchableHighlight>

           <TouchableHighlight onPress={() => navigate("WixActionSheet", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>WixActionSheet </Text>
            </View>
          </TouchableHighlight>

            <TouchableHighlight onPress={() => navigate("CardViewScreen", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>CardViewScreen </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("AnimatedSpringAnimation", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>AnimatedSpringAnimation </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("AnimationMultipleTime", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>AnimationMultipleTime </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("SignUpContainer", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>PostCallScreen </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate("ViewComponet", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ViewComponetRedux </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate("SnackBar", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>SnackBar </Text>
            </View>
          </TouchableHighlight>   

          <TouchableHighlight onPress={() => navigate("WheelPickerComponent", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>WheelPickerComponent </Text>
            </View>
          </TouchableHighlight> 

          <TouchableHighlight onPress={() => navigate("ToolTipsView", {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ToolTipsView </Text>
            </View>
          </TouchableHighlight> 
        </ScrollView>
      </View>
    );
  }
}
