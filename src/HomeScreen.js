import React, { Component, props } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  View,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SharedPreferences from 'react-native-shared-preferences';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Example',
  };

  render() {
    SharedPreferences.setItem("keyname", "irshadvali");
    AsyncStorage.setItem("keynamew", "shaikh irshad vali");
    var { navigate } = this.props.navigation;
    return (
      <View style={styles.scvwcontainer}>
        <ScrollView style={styles.scvwcontainer}>

          <TouchableHighlight onPress={() => navigate('Profile', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Profile With ScrollView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('List', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ListView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('sectionList', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Section ListView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Grid', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GridView</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Login', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>LoginPage</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('SignUp', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>SignUp</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('JsonList', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>JsonList</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('WebViewExample', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>WebViewExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('ImageSliderView', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ImageSliderView</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('ImageInfoSlider', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ImageInfoSlider</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('MapScreen', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>MapScreen</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('GradientScreen', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GradientScreen</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('GradientList', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>GradientList</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('MenuBarProfile', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>MenuBarProfile</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('ActivityIndicatorExample', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>ActivityIndicatorExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('AsyncStorageExample', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>AsyncStorageExample</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('PopupDialogTest', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>PopupDialogTest</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigate('Movies', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Movies List Api</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('TestFile', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>TestFile List Api</Text>
            </View>
          </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('FontTest', {})}>
            <View style={styles.buttondtyle}>
              <Text style={styles.buttonText}>Font Test </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttondtyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',

  },
  scvwcontainer: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
  },
})
