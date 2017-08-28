
import React, { Component } from 'react';
import sample_stack from './src/FirstScreen';


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
      <sample_stack />
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('AllNavigation', () => sample_stack);