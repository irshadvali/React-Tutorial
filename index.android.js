
import React, { Component } from 'react';



import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import configureStore from './src/store/configStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sample_stack from './src/FirstScreen';

const store = configureStore();
export default class AllNavigation extends Component {
   
    render() {
      return (
        <Provider store={store}>
        <Sample_stack />
      </Provider>

      );
    }
  }






AppRegistry.registerComponent('AllNavigation', () => AllNavigation);