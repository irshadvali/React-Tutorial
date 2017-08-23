import React, { Component } from "react";
import styles from "../../Styles";

import { AppRegistry, Text, View, Image } from "react-native";

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
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text style={styles.texcolorbold}>
            {" "}{this.props.toCity + " to " + this.props.fromCity}
          </Text>
        </View>
        {/* below block for truck capacity ,truck type and truck manufacturing */}
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text>
            {" "}{this.props.trkCapacity +
              " Tons | " +
              this.props.trkType +
              " | " +
              this.props.trkMfg}
          </Text>
        </View>
        {/* below block for truck capacity ,truck dmm and truck truck number */}
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text>
            {" "}{this.props.trkDmm + " | " + this.props.trkNumber}
          </Text>
        </View>
        {/* below block for commodity Type ,truck dmm and packing Type */}
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text>
            {" "}{this.props.commodityType + " | " + this.props.packingType}
          </Text>
        </View>
        {/* below block for company Name ,truck dmm and company Mobile number*/}
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text>
            {" "}{this.props.companyName + " | " + this.props.companyMobile}
          </Text>
        </View>
        {/* below block for Offer price*/}
        <View style={styles.itemrow}>
          <Image
            style={styles.row_imag}
            source={require("../images/one.png")}
          />
          <Text>
            {" "}{this.props.offerPrice}
          </Text>
        </View>

        <View style={{ height: 1, backgroundColor: "#9d9d9d", marginTop: 5 }} />
      </View>
    );
  }
}
export default TestApiTwoListItem;
