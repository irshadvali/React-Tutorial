import React, { Component } from "react";
import styles from "../../Styles";
import { AppRegistry, Text, View, Image } from "react-native";
import RowItem from "../common_component/RowItem";
import HOME from "../images/home.png";
import ONE from "../images/one.png";

class TestApiTwoListItem extends React.Component {
  static propTypes = {
    toCity: React.PropTypes.string,
    fromCity: React.PropTypes.string,
    trkCapacity: React.PropTypes.string,
    trkType: React.PropTypes.string,
    trkMfg: React.PropTypes.string,
    trkDmm: React.PropTypes.string,
    trkNumber: React.PropTypes.string,
    commodityType: React.PropTypes.string,
    packingType: React.PropTypes.string,
    companyName: React.PropTypes.string,
    companyMobile: React.PropTypes.string,
    offerPrice: React.PropTypes.string
  };

  render() { 
    return (
      <View style={styles.containerAcc}>
        {/* below block for city */}
        <RowItem
          valueOne={require('../images/one.png')}
          valueTwo={this.props.toCity}
          valueThree={" to " + this.props.fromCity}
          valuefour=""
        />
        {/* below block for truck ton ,truck type and truck truck mfg */}
        <RowItem
          valueOne={ONE}
          valueTwo={this.props.trkCapacity}
          valueThree={" | " + this.props.trkType}
          valuefour={" | " + this.props.trkMfg}
        />

        {/* below block for truck capacity ,truck dmm and truck truck number */}

        <RowItem
          valueOne={ONE}
          valueTwo={this.props.trkDmm}
          valueThree={" | " + this.props.trkNumber}
          valuefour=""
        />

        {/* below block for commodity Type ,truck dmm and packing Type */}
        <RowItem
          valueOne={ONE}
          valueTwo={this.props.commodityType}
          valueThree={" | " + this.props.packingType}
          valuefour=""
        />

        {/* below block for company Name ,truck dmm and company Mobile number*/}
        <RowItem
          valueOne={ONE}
          valueTwo={this.props.companyName}
          valueThree={" | " + this.props.companyMobile}
          valuefour=""
        />

        {/* below block for Offer price*/}
        <RowItem
          valueOne={ONE}
          valueTwo={this.props.offerPrice}
          valueThree=""
          valuefour=""
        />

        <View style={{ height: 1, backgroundColor: "#9d9d9d", marginTop: 5 }} />
      </View>
    );
  }
}
export default TestApiTwoListItem;
