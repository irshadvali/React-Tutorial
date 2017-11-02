import React, { Component, PropTypes } from "react";
import Dimensions from "Dimensions";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  TextInput,
  View
} from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
// import { onSignIn } from "../utils/auth";

export const ResetToSignedOut = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: "SignedOut" })]
});

export const ResetToSignedIn = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: "SignedIn" })]
});

class PostCallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true
    };
    this.showPass = this.showPass.bind(this);
  }

  state = {
    username: "",
    password: ""
  };
  /* toolbar text*/
  static navigationOptions = {
    header: null
  };

  handleUsername = text => {
    this.setState({ username: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (username, pass) => {
    this.props.loginUser(username, pass);
  };

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }
  render() {
    var { navigate } = this.props.navigation;

    if (
      this.props.signUpResults != "No user Found" &&
      this.props.signUpResults.length != 0
    ) {
      Alert.alert("Success")
    var collectData=  JSON.stringify(this.props.loginResults)
      Alert.alert("Success"+collectData.first_name)
      // AsyncStorage.setItem(
      //   "loginResult",
      //   JSON.stringify(this.props.loginResults),
      //   () => {
      //     onSignIn().then(() =>
      //       this.props.navigation.dispatch(ResetToSignedIn)
      //     );
      //   }
      // );
    }
    // else{
    //   Alert.alert("Enter Valid username and password")
    // }
    return (
      <View style={styles.container}>
        <View style={(styles.subcontainer, styles.logo_layout)}>
          <Image
            source={require("./../../images/1.jpg")}
            style={styles.image}
          />
          <Text style={styles.signIntext}>SignIn</Text>
        </View>

        <View style={(styles.subcontainer, styles.signin_layout)}>
          <View style={styles.inputWrapper}>
            <Icon
              name="user-circle-o"
              size={22}
              color="#000"
              style={styles.inlineImg}
            />

            {/* <Image source={usernameImg}
            style={styles.inlineImg} /> */}
            <TextInput
              style={styles.input}
              placeholder={this.props.placeholder}
              secureTextEntry={this.props.secureTextEntry}
              autoCorrect={this.props.autoCorrect}
              autoCapitalize={this.props.autoCapitalize}
              returnKeyType={this.props.returnKeyType}
              placeholder="Username"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              returnKeyLabel={"next"}
              onChangeText={this.handleUsername}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name="lock" size={22} color="#000" style={styles.inlineImg} />
            {/* <Image source={passwordImg}
            style={styles.inlineImg} /> */}
            <TextInput
              style={styles.input}
              placeholder={this.props.placeholder}
              secureTextEntry={this.props.secureTextEntry}
              autoCorrect={this.props.autoCorrect}
              autoCapitalize={this.props.autoCapitalize}
              returnKeyType={this.props.returnKeyType}
              secureTextEntry={this.state.showPass}
              placeholder="Password"
              placeholderTextColor="grey"
              returnKeyLabel={"next"}
              underlineColorAndroid="transparent"
              onChangeText={this.handlePassword}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnEye}
            onPress={this.showPass}
          >
            <Icon
              name="eye-slash"
              size={22}
              color="#000"
              style={styles.iconEye}
            />
          </TouchableOpacity>
        </View>

        <View style={(styles.subcontainer, styles.signbtn_layout)}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.login(this.state.username, this.state.password)}
          >
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.subcontainer,styles.signup_layout}>
    <Text style={styles.signIntext}>Create Account</Text>
    <Text style={styles.signIntext}>Forgot Password?</Text>
  </View> */}
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const MARGIN = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  subcontainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo_layout: {
    alignItems: "center",
    justifyContent: "center"
  },
  signin_layout: {
    alignItems: "center"
  },
  signbtn_layout: {
    alignItems: "center"
  },
  signup_layout: {
    top: 10,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    width: 80,
    height: 80
  },
  btnEye: {
    position: "absolute",
    padding: 10,
    top: 80,
    right: 28
  },
  iconEye: {
    width: 25,
    height: 25
  },
  signIntext: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    width: 200,
    borderRadius: 10,
    top: 20,
    height: MARGIN
  },
  inputtxt_style: {
    width: 300,
    height: 40,
    padding: 10,
    backgroundColor: "#e9e9e9",
    borderRadius: 30,
    marginTop: 10
  },
  input: {
    backgroundColor: "rgba(210, 210, 210, 0.4)",
    width: DEVICE_WIDTH - 40,
    height: MARGIN,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 10,
    color: "#000000"
  },
  inputWrapper: {
    margin: 10
  },
  inlineImg: {
    position: "absolute",
    zIndex: 99,
    left: 35,
    top: 14
  }
});

PostCallScreen.propTypes = {
  LoginInfo: PropTypes.func,
  loginResults: PropTypes.any
};

export default PostCallScreen;

