import React, {Component, props} from 'react';
import {
    TouchableHighlight,
    View,
    Text,
} from "react-native";
import {default as styles } from "./Styles.js";


export default class MenuItem extends Component {
    onPressHandler = () => {
        this.props.onPressFunc(this.props.name);    
    }
    render() {
        const { label } = this.props;
        return (
            <TouchableHighlight onPress={this.onPressHandler}>
            <View style={styles.buttondtyle}>
                <Text style={styles.buttonText}>{label}</Text>
            </View>
            </TouchableHighlight>
        );
    }
}

MenuItem.propTypes = {
    onPressFunc: React.PropTypes.func,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
};
