import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, StyleSheet } from 'react-native';
import styles from '../Styles';
export default class TestFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/oe7xx')
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
