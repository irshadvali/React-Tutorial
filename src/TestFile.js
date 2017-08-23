import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, StyleSheet } from 'react-native';
import styles from '../Styles';
import TestListMenu from './core_component/TestListMenu';
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
                                <TestListMenu
                                        ptime={rowData[5]}
                                        pday={rowData[4]}
                                        pPkg={rowData[8]}
                                        pBundle={rowData[6]}
                                        pWt={rowData[7]}

                                />
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
