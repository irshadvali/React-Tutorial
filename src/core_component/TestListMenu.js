import React, { Component } from "react";
import styles from "../../Styles";

import {
  AppRegistry,
  Text,
  View,
} from "react-native";

class TestListMenu extends React.Component {
  static propTypes = {
    ptime: React.PropTypes.string,
    pday: React.PropTypes.string,
    pPkg: React.PropTypes.string,
    pBundle: React.PropTypes.string,
    pWt: React.PropTypes.string
  };

  render() {
    return (
      <View style={styles.gcontainer}>
        <View style={styles.listmain}>
          <View style={styles.partone}>
            <Text>
              {" "}{this.props.ptime}
            </Text>
            <Text>
              ({this.props.pday})
            </Text>
          </View>
          <View style={styles.partthree} />
          <View style={styles.parttwo}>
            <Text style={styles.texcolorbold}>
              {" "}{this.props.pPkg + "( " + this.props.pBundle + " )"}
            </Text>
            <Text style={styles.texcolorbold}>
              ({"Wt. " + this.props.pWt})
            </Text>
          </View>
        </View>

        <View style={{ height: 2, backgroundColor: "#e6e6e6" }} />
      </View>
    );
  }
}
export default TestListMenu;
