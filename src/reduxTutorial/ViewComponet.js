import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";
import { selectValues } from "../action/action.datashow";
class ViewComponet extends React.Component {
  static navigationOptions = {
    title: "this is scrollview example"
  };
  constructor(props) {
    super(props);
    state: {
      inputvaue: "";
    }
  }
  _onPress = () => {
    var { navigate } = this.props.navigation;

    this.props.selectValues(this.state.inputvaue);
    navigate("ShowValues", {});
  };
  render() {
    var { params } = this.props.navigation.state;
    return (
      <View>
        <Text>this is third screen, Exmaple of Scrollview</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ inputvaue: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
ViewComponet.navigationOptions = {
  title: "ViewComponet Redux"
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  },
  texttest: {
    fontFamily: "Roboto-Bold.ttf"
  },
  inputTextS: {
    height: 50,
    width: 200
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    width: 200,
    borderRadius: 30,
    height: 50,
    marginTop: 40
  }
});

const mapStateToProps = state => {
  return {
    savedata: state.ShowDataReducer.savedata
  };
};

export default connect(mapStateToProps, {
  selectValues
})(ViewComponet);
