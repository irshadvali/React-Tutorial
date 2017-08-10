import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class FontTest extends React.Component {

    static navigationOptions = {
        title: 'this is scrollview example',
    };
    render() {
        var { params } = this.props.navigation.state;
        return (
            <View>
                <Text>this is Font screen, Exmaple of Font</Text>
                <Text style={styles.texttest}>Hello React Font  = vincHand</Text>
                <Text style={styles.texttestone}>Hello React Font = RobotoLight</Text>
                <Text style={styles.fontthree}>Hello React Font = RobotoRegular</Text>
                <Text style={styles.fontfour}>Hello React Font = RobotoThin</Text>
                 <Text style={styles.fontfive}>Hello React Font = RobotoBold</Text>
                <Text style={styles.fontsix}>Hello React Font = RobotoMedium</Text>
                <ScrollView>

                </ScrollView>

            </View>
        );
    }
}
FontTest.navigationOptions = {
    title: 'FontTest Screen',
};
const styles = StyleSheet.create({
    map: {
        height: 400,
        marginTop: 80
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    texttest: {
        fontFamily: "vincHand",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    texttestone: {
        fontFamily: "RobotoLight",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    fontthree: {
        fontFamily: "RobotoRegular",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    fontfour: {
        fontFamily: "RobotoThin",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
        fontfive: {
        fontFamily: "RobotoBold",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    fontsix: {
        fontFamily: "RobotoMedium",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
})

export default FontTest;
