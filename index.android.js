
import React, { Component } from 'react';
import HomeScreen from './src/HomeScreen';
import ChatScreen from './src/ChatScreen';
import ThirdScreen from './src/ThirdScreen';
import JsonList from './src/JsonList';
import ProfileScreen from './src/ProfileScreen';
import ListView from './src/ListView';
import GridViewExample from './src/GridViewExample';
import Login from './src/Login';
import SignUp from './src/SignUp';
import SectionListView from './src/SectionListView';
import WebViewExample from './src/WebViewExample';
import ImageSliderView from './src/ImageSliderView';  
import ImageInfoSlider from './src/ImageInfoSlider';
import MapScreen from './src/MapScreen';
import GradientScreen from './src/GradientScreen';
import GradientList from './src/GradientList';
import MenuBarProfile from './src/MenuBarProfile';
import ActivityIndicatorExample from './src/ActivityIndicatorExample';
import AsyncStorageExample from './src/AsyncStorageExample';
import PopupDialogTest from './src/PopupDialogTest';
import Movies from './src/Movies';
import TestFile from './src/TestFile';
import FontTest from './src/FontTest';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class AllNavigation extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

const sample_stack = StackNavigator({ /* we can change it to  TabNavigator and DrawerNavigator*/
  Home: { screen: HomeScreen },
  Profile :{screen :ProfileScreen},
  List:{screen :ListView},
  Grid :{screen : GridViewExample},
  Login :{screen :Login},
  SignUp:{screen :SignUp},
  sectionList:{screen :SectionListView},
  JsonList: {screen: JsonList},
   ThirdScreen: {screen: ThirdScreen},
   ImageSliderView: {screen: ImageSliderView},
   WebViewExample: {screen: WebViewExample},
   ImageInfoSlider: {screen: ImageInfoSlider},
   MapScreen: {screen: MapScreen},
   GradientScreen: {screen: GradientScreen},
    GradientList: {screen: GradientList},
    MenuBarProfile: {screen: MenuBarProfile},
    ActivityIndicatorExample: {screen: ActivityIndicatorExample},
    AsyncStorageExample: {screen: AsyncStorageExample},
    PopupDialogTest: {screen: PopupDialogTest},
     Movies: {screen: Movies},
     TestFile: {screen: TestFile},
     FontTest: {screen: FontTest},
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('AllNavigation', () => sample_stack);