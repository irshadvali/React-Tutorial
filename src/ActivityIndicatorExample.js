import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityIndicatorExample extends React.Component {
   state = { animating: true }

   closeActivityIndicator = () =>setTimeout(() => this.getNewScr() , 6000)

   componentDidMount = () => this.closeActivityIndicator()
    static navigationOptions = {
        title: 'this is ActivityIndicatorExample Screen',
    };

getNewScr(){
 var { navigate } = this.props.navigation;
 navigate('SignUp', {})
}

    render() {
       
        const animating = this.state.animating
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
         </View>
      )
    }
}
ActivityIndicatorExample.navigationOptions = {
    title: 'JsonList Screen',
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})

export default ActivityIndicatorExample;
