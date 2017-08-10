import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  SectionList,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SectionListView extends React.Component {
  static navigationOptions = {
    title: 'Section ListView',
  };

  alertItemName = (item) => {
      alert(item)
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}

          /*this is for setting section item */
          renderItem={({item}) => (
            <TouchableOpacity
                key={item.id}
                style={styles.list_item}
                onPress={() => this.alertItemName(item)}>
                <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
          )}

          /*this is for setting sectionheader */
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: '#2196F3',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default SectionListView;
