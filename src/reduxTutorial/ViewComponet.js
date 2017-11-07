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
import { totalvalueCheck } from "../action/action.datashow";
import { totalvalueSub } from "../action/action.datashow";
class ViewComponet extends React.Component {
  static navigationOptions = {
    title: "this is scrollview example"
  };
  constructor(props) {
    super(props);
    state: {
      inputvaue: "";
      count: 0;
    }
  }
  _onPress = () => {
    var { navigate } = this.props.navigation;

    this.props.selectValues(this.state.inputvaue);
    navigate("ShowValues", {});
  };
  _onAdd = () => {
    var cal_value=this.props.totalvalue+1;
    this.props.totalvalueCheck(cal_value)
  };
  _onSub = () => {
    var cal_value=this.props.totalvalue-1;
    this.props.totalvalueSub(cal_value)
  };
  render() {
    var { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Redux example</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ inputvaue: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={styles.text}>SUBMIT</Text>
        </TouchableOpacity>

        <Text>{this.props.savedata}</Text>
        <View style={styles.rowItem}>
          <TouchableOpacity style={styles.button} onPress={this._onAdd}>
            <Text style={styles.text}>Increment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._onSub}>
            <Text style={styles.text}>Decrement</Text>
          </TouchableOpacity>
        </View>

       <View style={styles.resultView}> 
       <Text style={styles.textviewS}>"irshad ==="{this.props.totalvalue}</Text>
       </View>
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
    width: 150
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    width: 200,
    borderRadius: 30,
    height: 50,
    marginTop: 40,
    marginLeft: 5
  },
  rowItem: {
    flexDirection: "row"
  },
  textviewS:{
    justifyContent: 'center',
  
    fontSize:30,
    color:'black'
  },
  resultView:{
    flex:1,
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return {
    savedata: state.ShowDataReducer.savedata,
    totalvalue: state.CalculateReducer.totalvalue,
  
  };
};

export default connect(mapStateToProps, {
  selectValues,
  totalvalueCheck,
  totalvalueSub
})(ViewComponet);
