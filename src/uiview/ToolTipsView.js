import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
class ToolTipsView extends React.Component {
    state = {
        counterItem1: 0,
        counterItem2: 0
      };
 

    render() {
        var{params}=this.props.navigation.state;
        return (
            <View style = { styles.container }>
<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 25 }}>
        <View>
          <Text style={{ textAlign: 'center' }}>This is example of react-native-tooltip-menu</Text>
          <Text style={{ textAlign: 'center' }}>Clicked item1: {this.state.counterItem1}</Text>
          <Text style={{ textAlign: 'center' }}>Clicked item2: {this.state.counterItem2}</Text>
        </View>
        <ReactNativeTooltipMenu
          buttonComponent={
            <View
              style={{
                backgroundColor: 'purple',
                padding: 10,
                borderRadius: 25
              }}
            >
              <Text style={{ color: 'white', flex: 1 }}>Click me to show tooltip!</Text>
            </View>
          }
          items={[
            {
              label: 'Label #1',
              onPress: () => this.setState({ counterItem1: this.state.counterItem1 + 1 })
            },
            {
              label: 'Label #2',
              onPress: () => this.setState({ counterItem2: this.state.counterItem2 + 1 }),
            },
          ]}
        />
      </View>
         </View>
        );
    }
}
ToolTipsView.navigationOptions = {
    title: 'ToolTipsView Screen',
};
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        // paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },

    button:
    {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        alignSelf: 'stretch'
    },


})

export default ToolTipsView;
