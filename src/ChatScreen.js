import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'this is listview Screen',
    };

    state = {
        names: [
            {
                id: 0,
                name: 'Ben',
                last: 'Jog'
            },
            {
                id: 1,
                name: 'Susan',
                last: 'Mon'
            },
            {
                id: 2,
                name: 'Robert',
                last: 'Licen'
            },
            {
                id: 3,
                name: 'Mary',
                last: 'Mong'
            }
        ]
    }

    alertItemName = (item) => {
        alert(item.name+" "+item.last)
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is second Screen, Example of Listview</Text>
                <Button
                    onPress={() => navigate('Third', {})}
                    title="Go Next" />


                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}
                        >
                            <Text style={styles.text}>
                                {item.name + " " + item.last}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}
ChatScreen.navigationOptions = {
    title: 'Second Screen',
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    }
})

export default ChatScreen;
