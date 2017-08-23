import React, { Component } from "react";
import styles from "../../Styles";

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
} from "react-native";

class GradientCommon extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    cname: React.PropTypes.string,
    type: React.PropTypes.string,
    email: React.PropTypes.string
  };

  render() {
    return (
      <View style={styles.gcontainer}>
        <View style={styles.guserCard_layout}>
          <Text style={styles.gheader_txt}>
            {this.props.title}
          </Text>

          <View style={styles.gcard_content}>
            <Text style={styles.glabel_txt}>Name :</Text>
            <Text style={styles.glabel_txt}>
              {this.props.cname}
            </Text>
          </View>

          <View style={styles.gcard_content}>
            <Text style={styles.glabel_txt}>Type :</Text>
            <Text style={[styles.glabel_txt, styles.gtextP]}>
              {this.props.type}
            </Text>
          </View>

          <View style={styles.gcard_content}>
            <Text style={styles.glabel_txt}>Email :</Text>
            <Text style={styles.glabel_txt}>
              {this.props.email}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default GradientCommon;