import React, { Component } from "react";
import styles from "../../Styles";

import { AppRegistry, Text, View, Image } from "react-native";

class RowItem extends React.Component {
  static propTypes = {
    valueOne: React.PropTypes.number,
    valueTwo: React.PropTypes.string,
    valueThree: React.PropTypes.string,
    valuefour: React.PropTypes.string
  };

  render() {
    return (
      <View>
        {/* below block for truck capacity ,truck dmm and truck truck number */}
        <View style={styles.itemrow}>
          <Image style={styles.row_imag} source={this.props.valueOne} />
          <Text>
            {this.props.valueTwo + " " + this.props.valueThree +" "+ this.props.valuefour}
          </Text>
        </View>
      </View>
    );
  }
}
export default RowItem;
