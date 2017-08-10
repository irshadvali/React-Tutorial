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
            <View style={styles.container}>
                <ScrollView style={styles.scvwcontainer}>
                    {
                        this.state.data.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.container}
                              
                                 onPress={() => navigate('ThirdScreen', {name: item.cname, email: item.email})}
                            >
                                {/* <Text style={styles.text}>
                                {item.title + " (" + item.cname + ")"}
                            </Text> */}

                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                                    locations={[0, 1]}
                                    colors={[item.scolor, item.ecolor]}
                                    style={styles.linearGradient}>
                                    <View style={styles.userCard_layout}>
                                        <Text style={styles.header_txt}>{item.title}</Text>

                                        <View style={styles.card_content}>
                                            <Text style={styles.label_txt}>Name       :</Text>
                                            <Text style={styles.label_txt}>{item.cname}</Text>
                                        </View>

                                        <View style={styles.card_content}>
                                            <Text style={styles.label_txt}>Type         :</Text>
                                            <Text style={[styles.label_txt, styles.textP]}>{item.type}</Text>
                                        </View>

                                        <View style={styles.card_content}>
                                            <Text style={styles.label_txt}>Email        :</Text>
                                            <Text style={styles.label_txt}>{item.email}</Text>
                                        </View>

                                    </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 3,

    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    },
    linearGradient: {
        height: 150,
        borderRadius: 2,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },

    card_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userCard_layout: {
        flexDirection: 'column',
        width: 350,
        height: 150,
        padding: 15,
    },
    label_txt: {
        color: 'white',
        fontSize: 15,
        marginTop: 10
    },
    header_txt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    scvwcontainer: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'column',
    },
})

export default GradientList;
