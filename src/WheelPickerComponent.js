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
import {WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'
class WheelPickerComponent extends React.Component {
    constructor()
    {
       super();
    }
 

    render() {
        var{params}=this.props.navigation.state;
        return (
            <View style = { styles.container }>
<TimePicker
  style={{flex: 1}}
  selectedValue={1}
  pickerData={[1, 2, 3, 4, 5, 6]}
  onValueChange={(value) => this.setState({value})}
/>
         </View>
        );
    }
}
WheelPickerComponent.navigationOptions = {
    title: 'WheelPickerComponent Screen',
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

export default WheelPickerComponent;
