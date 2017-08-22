import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    ListView,
    AsyncStorage,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import GradientCommon from './GradientCommon';
import styles from "../Styles";

class GradientList extends React.Component {
  
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    // 598354
    getData() {
        return fetch('https://api.myjson.com/bins/iw3x5')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson.complist });

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
    }

    static navigationOptions = {
        title: 'this is JsonList Screen',
    };



    alertItemName = (item) => {
        alert(item.title + " (" + item.cname + ")")
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.gcontainer}>
                <ScrollView style={styles.gscvwcontainer}>
                    {
                        this.state.data.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.gcontainer}
                              
                                 onPress={() => navigate('ThirdScreen', {name: item.cname, email: item.email})}
                            >                     
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                                    locations={[0, 1]}
                                    colors={[item.scolor, item.ecolor]}
                                    style={styles.glinearGradient}>
                                    <GradientCommon title=  {item.title}
                                                    cname= {item.cname}
                                                    type={item.type}
                                                    email= {item.email}
                                    
                                    />
                                  
                                </LinearGradient>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}
GradientList.navigationOptions = {
    title: 'JsonList with Gradient Screen',
};



export default GradientList;
