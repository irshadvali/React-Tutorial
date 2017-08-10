import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GridView from "react-native-easy-grid-view";

class GridViewExample extends React.Component {
  static navigationOptions = {
    title: 'GridView',
  };

  constructor(props) {
         super(props);
         var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.state = {
             dataSource: ds.cloneWithCells([
                 {
                     text: 'shruti',
                     backgroundColor:'#f00'
                 }
                 , {
                     text: 'basu',
                     backgroundColor:'#0f0'

                 }, {
                     text: 'Dileep',
                     backgroundColor:'#00f'

                 }, {
                     text: 'Irshad',
                     backgroundColor:'#f0f'

                 }, {
                     text: 'Sriram',
                     backgroundColor:'#f00'

                 },{
                     text: 'abc',
                     backgroundColor:'#ff7'

                 }, {
                     text: 'Mongo',
                     backgroundColor:'#4d4d4d'

                 }, {
                     text: "Dhoni",
                     backgroundColor:'#000'

                 }], 2),
             cellWidth: 0,
             cellHeight: 0
         };
     }

     _renderCell(cell) {
         return <View onLayout={event => {
           var width = event.nativeEvent.layout.width;
          if(this.state.cellWidth!=width){
          this.setState({cellWidth:width})
          }
          if(this.state.cellHeight!=width){
          this.setState({cellHeight:width})
          }
         }}>
             <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center',backgroundColor:cell.backgroundColor}}
                    resizeMode={Image.resizeMode.stretch} source={cell.image}>
                 <Text style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:20}}>{cell.text}</Text>
             </View>
         </View>
     }

     render() {
         return <View>
             <GridView
                      dataSource={this.state.dataSource}
                      spacing={8}
                      style={{padding:5}}
                      renderCell={this._renderCell.bind(this)}

             />
         </View>
     }
 }

 module.exports = GridViewExample;
export default GridViewExample;
