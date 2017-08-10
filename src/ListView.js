import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ListView extends React.Component {
  static navigationOptions = {
    title: 'ListView(FlatList)',
  };

  alertItemName = (item) => {
      alert(item.name+" "+item.last)
  }

  render() {
    return (
      <View style={styles.container}>
          <FlatList
          data = {[
                  {
                      id: 0,
                      name: 'Ben',
                      last: 'Jog',
                      email:'ben@gmail.com',
                      mob_num:'8798596592'
                  },
                  {
                      id: 1,
                      name: 'Susan',
                      last: 'Mon',
                      email:'susan@gmail.com',
                      mob_num:'8798596664'
                  },
                  {
                      id: 2,
                      name: 'Robert',
                      last: 'Licen',
                      email:'Rebort@gmail.com',
                      mob_num:'8798596598'
                  },
                  {
                      id: 3,
                      name: 'Mary',
                      last: 'Mong',
                      email:'Mary@gmail.com',
                      mob_num:'8798596590'
                  },
                  {
                      id: 4,
                      name: 'Marycon',
                      last: 'Mongo',
                      email:'Marycon@gmail.com',
                      mob_num:'8798596595'
                  },
                  {
                      id: 5,
                      name: 'Martin',
                      last: 'farnandis',
                      email:'Martin@gmail.com',
                      mob_num:'8798596567'
                  },
                  {
                      id: 6,
                      name: 'sachin',
                      last: 'Tendulkar',
                      email:'sachin@gmail.com',
                      mob_num:'8798596566'
                  },
                  {
                      id: 7,
                      name: 'Dhoni',
                      last: 'farnandis',
                      email:'Dhoni@gmail.com',
                      mob_num:'8798596545'
                  }
              ]
          }
            renderItem={({item}) => (
              <TouchableOpacity
                  key={item.id}
                  style={styles.list_item}
                  onPress={() => this.alertItemName(item)}>
                  <View>
                  <Text style={styles.text}>
                      {item.name + " " + item.last}
                  </Text>

                  <Text style={styles.text}>{item.email}</Text>

                  <Text style={styles.text}>{item.mob_num}</Text>

                  </View>

              </TouchableOpacity>
            )}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop:10,
   marginLeft:10,
   marginRight:10,
 },
  Textstyle: {
     color: 'black',
     fontSize:20,
     textAlign: 'center',

   },
   text: {
         color: '#4f603c',
         textAlign: 'left',
         fontSize: 15,
     },
     list_item:{
       padding: 15,
       height:100,
       marginBottom :10,
       backgroundColor:'#FFFFFF'
     }
})

export default ListView;
