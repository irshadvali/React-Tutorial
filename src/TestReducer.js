import React, { Component } from 'react';
import { ActivityIndicator, ListView,  View, Text, StyleSheet } from 'react-native';
import styles from '../Styles';
import { loadInfo } from './action'
import TESTONE_API from './store/Constant'
import { connect } from 'react-redux';
import TestApiTwoListItem from './core_component/TestApiTwoListItem';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class TestReducer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadInfo(TESTONE_API);
       
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={ds.cloneWithRows(this.props.payload)}
                    renderRow={
                        (rowData) =>
                            <View >
                                
                                
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
TestReducer.navigationOptions = {
    title: 'TestReducer',
};

const mapStateToProps = state =>{
  return {
    payload:state.Load.payload,
    error:state.Load.error,
    loading:state.Load.loading,
  };
  
  };
  
export default  connect(mapStateToProps,{ loadInfo })(TestReducer);

