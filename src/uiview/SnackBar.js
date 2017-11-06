import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SnackBarCustom from 'react-native-custom-snackbar';

class SnackBar extends React.Component {
    constructor()
    {
       super();
    }
 
    showSnackBar = () =>
    {
       this.refs.mySnackBar.show("Custom SnackBar Text...");
    }

    static navigationOptions = {
        title: 'this is scrollview example',
    };
    render() {
        var{params}=this.props.navigation.state;
        return (
            <View style = { styles.container }>
            
            <TouchableOpacity activeOpacity = { 0.8 } onPress = { this.showSnackBar } style = { styles.button }>
              <Text style = { styles.btnText }>Show Snack Bar</Text>
            </TouchableOpacity>

            <SnackBarCustom
            	ref = "mySnackBar"
            	closeText = "close"/>
         </View>
        );
    }
}
SnackBar.navigationOptions = {
    title: 'Snackbar Screen',
};
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        // paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },

    button:
    {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        alignSelf: 'stretch'
    },

    btnText:
    {
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default SnackBar;
