import React, { Component } from 'react';
import { ActivityIndicator, View, Text,TextInput, TouchableOpacity, StyleSheet,AsyncStorage } from 'react-native';

class AsyncStorageExample extends React.Component {
   
state = {
      'name': ''
   }

   componentDidMount = () => AsyncStorage.getItem('name').then((value) =>  this.setState({ 'name': value }))

   setName = (value) =>  {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }

    render() {
       
        const animating = this.state.animating
      return (
       <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none' onChangeText = {this.setName}/>
            <Text>
               {this.state.name}
            </Text>
         </View>
      )
    }
}
AsyncStorageExample.navigationOptions = {
    title: 'JsonList Screen',
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
	
   textInput: {
      margin: 15,
      height: 35,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})

export default AsyncStorageExample;
