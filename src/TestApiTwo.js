import React, { Component } from 'react';
import { ActivityIndicator, ListView,  View, Text, StyleSheet } from 'react-native';
import styles from '../Styles';
import TestApiTwoListItem from './core_component/TestApiTwoListItem';
export default class TestApiTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/1ahk1h')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.results),
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
                                {/* <Text> {rowData.tripDetails.load.city_from+" to "+rowData.tripDetails.load.city_to}</Text>
                                <Text> {rowData.tripDetails.avail.truck_details.trkCap+"Tons | "+rowData.tripDetails.avail.truck_details.trkType+" | "+rowData.tripDetails.avail.truck_details.trk_mfg}</Text>
                                <Text> {rowData.tripDetails.avail.truck_details.chsDmn+" | "+rowData.tripDetails.avail.truck_details.trkno}</Text>
                                <Text> {rowData.tripDetails.load.commodity_type+" | "+rowData.tripDetails.load.packing_type}</Text>
                                 <Text> {rowData.tripDetails.load.company_name+" | "+rowData.tripDetails.load.npRegNumber}</Text>
                                 <Text> {rowData.tripDetails.load.offer_price}</Text>
                                <Text>----------------------------------------------------</Text> */}
                                
                                 <TestApiTwoListItem
                                            toCity={rowData.tripDetails.load.city_from}
                                            fromCity= {rowData.tripDetails.load.city_to}
                                            trkCapacity ={rowData.tripDetails.avail.truck_details.trkCap}
                                            trkType= {rowData.tripDetails.avail.truck_details.trkType}
                                            trkMfg= {rowData.tripDetails.avail.truck_details.trk_mfg}
                                            trkDmm= {rowData.tripDetails.avail.truck_details.chsDmn}
                                            trkNumber= {rowData.tripDetails.avail.truck_details.trkno}
                                            commodityType={rowData.tripDetails.load.commodity_type}
                                            packingType= {rowData.tripDetails.load.packing_type}
                                            companyName= {rowData.tripDetails.load.company_name}
                                            companyMobile= {rowData.tripDetails.load.npRegNumber}
                                            offerPrice= {rowData.tripDetails.load.offer_price}
                                /> 
                            </View>
                    }

                />
            </View>

        );
    }
}
TestApiTwo.navigationOptions = {
    title: 'TestApiTwo',
};
