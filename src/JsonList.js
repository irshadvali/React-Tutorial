import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    ListView,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  SVGImage  from 'react-native-svg-image';

class JsonList extends React.Component {
      state={
    name:''
  }

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    // 598354
    getData() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson.movies });

            })
            .catch((error) => {
                console.error(error);
            });

            AsyncStorage.multiSet([
    ["email", "irshad@xelpmoc.in"],
    ["password", "123123"]
])
    }

    componentDidMount() {
        this.getData();
        AsyncStorage.getItem('keynamew').then((value) => this.setState({name:value}));
    }

    static navigationOptions = {
        title: 'this is JsonList Screen',
    };



    alertItemName = (item) => {
        alert(item.title + " (" + item.releaseYear + ")")
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View>
                <Text>{this.state.name}</Text>
                <SVGImage
                    style={{ width: 80, height: 80 }}
                    source={{ uri: 'https://fluent-panda.appspot.com.storage.googleapis.com/dumbbell.svg' }}
                />
                <Button
                    onPress={() => navigate('ThirdScreen', {name: "irshad vali", email: "irshad@xelpmoc.in"})}
                    title="Go Next" />


                {
                    this.state.data.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}
                        >
                            <Text style={styles.text}>
                                {item.title + " (" + item.releaseYear + ")"}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}
JsonList.navigationOptions = {
    title: 'JsonList Screen',
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

export default JsonList;

cc
