
import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ThirdScreen from './ThirdScreen';
import JsonList from './JsonList';
import ProfileScreen from './ProfileScreen';
import ListView from './ListView';
import GridViewExample from './GridViewExample';
import Login from './Login';
import SignUp from './SignUp';
import SectionListView from './SectionListView';
import WebViewExample from './WebViewExample';
import ImageSliderView from './ImageSliderView';  
import ImageInfoSlider from './ImageInfoSlider';
import MapScreen from './MapScreen';
import GradientScreen from './GradientScreen';
import GradientList from './GradientList';
import MenuBarProfile from './MenuBarProfile';
import ActivityIndicatorExample from './ActivityIndicatorExample';
import AsyncStorageExample from './AsyncStorageExample';
import PopupDialogTest from './PopupDialogTest';
import Movies from './Movies';
import TestFile from './TestFile';
import FontTest from './FontTest';
import TestApiTwo from './TestApiTwo';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

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
     TestApiTwo: {screen: TestApiTwo},
    
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default sample_stack
//AppRegistry.registerComponent('FirstScreen', () => sample_stack);