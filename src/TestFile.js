import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, StyleSheet } from 'react-native';

export default class TestFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://beta.4tigo.com/beta/app/index.php?action=showLoadsInfo&usertype=3&userid=2017061921766800&ctid=10277&curLat=12.93903461&curLng=77.62246952&appVersion=&defimei=&fromapp=1&respLang=1')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.results.values),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) =>
                            <View>
                                <View style={styles.listmain}>
                                    <View style={styles.partone}>
                                        <Text> {rowData[5]}</Text>
                                        <Text >({rowData[4]})</Text>
                                    </View>
                                    <View style={styles.partthree}></View>
                                    <View style={styles.parttwo}>
                                        <Text style={styles.texcolorbold}> {rowData[8]+"( "+rowData[6]+" )"}</Text>
                                        <Text style={styles.texcolorbold}>({"Wt. "+rowData[7]})</Text>
                                    </View>

                                </View>

                                <View style={{ height: 2, backgroundColor: '#e6e6e6' }}></View>
                            </View>
                    }

                />
            </View>

        );
    }
}
TestFile.navigationOptions = {
    title: 'TestFile',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    Textstyle: {
        color: 'black',
        fontSize: 20,

    },
    text: {
        color: '#4f603c',
        fontSize: 15,
    },
    list_item: {
        padding: 15,
        height: 50,
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    listmain: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
    },
    partone: {
        flex: .25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    parttwo: {
        flex: .737,
        backgroundColor: '#FFFFFF',
         justifyContent: 'center',
         paddingLeft:10,
         fontWeight: 'bold' 
    },
    partthree: {
        flex: .003,
        backgroundColor: '#e6e6e6'
    },
    texcolorbold:{
     color:'#333'
    }
})