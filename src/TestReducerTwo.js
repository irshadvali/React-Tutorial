import React, { Component } from 'react';
import { ActivityIndicator, ListView,  View,  StyleSheet } from 'react-native';
import styles from '../Styles';
import { loadInfotwo } from './action/actiontwo'
import TESTTWO_API from './store/Constant'
import { connect } from 'react-redux';
import TestListMenu from './core_component/TestListMenu';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
 class TestReducerTwo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadInfotwo(loadInfotwo);
       
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
                            <View>
                                <TestListMenu
                                        ptime={rowData[5]}
                                        pday={rowData[4]}
                                        pPkg={rowData[8]}
                                        pBundle={rowData[6]}
                                        pWt={rowData[7]}

                                />
                            </View>
                    }

                />
            </View>

        );
    }
}
TestReducerTwo.navigationOptions = {
    title: 'TestReducerTwo',
};

const mapStateToProps = state =>{
  return {
    payload:state.LoadTwo.payload,
    error:state.LoadTwo.error,
    loading:state.LoadTwo.loading,
  };
  
  };
  
export default  connect(mapStateToProps,{ loadInfotwo })(TestReducerTwo);
