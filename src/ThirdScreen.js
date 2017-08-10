import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  SVGImage  from 'react-native-svg-image';

class ThirdScreen extends React.Component {
    state = {
        names: [
            { 'name': 'Ben', 'id': 1 },
            { 'name': 'Susan', 'id': 2 },
            { 'name': 'Robert', 'id': 3 },
            { 'name': 'Mary', 'id': 4 },
            { 'name': 'Daniel', 'id': 5 },
            { 'name': 'Laura', 'id': 6 },
            { 'name': 'John', 'id': 7 },
            { 'name': 'Debra', 'id': 8 },
            { 'name': 'Aron', 'id': 9 },
            { 'name': 'Ann', 'id': 10 },
            { 'name': 'Steve', 'id': 11 },
            { 'name': 'Olivia', 'id': 12 }
        ]
    }
    static navigationOptions = {
        title: 'this is scrollview example',
    };
    render() {
        var{params}=this.props.navigation.state;
        return (
            <View>
                <Text>this is third screen, Exmaple of Scrollview</Text>
                 {/* <Text>this is third name=:{params.name},email={params.email}</Text> */}
                 <Text style={styles.texttest}>this is third name=:{params.name}</Text>
                 <Text>this is third email=:{params.email}</Text>
                
                <ScrollView>
                    <SVGImage
                        style={{ width: 80, height: 80 }}
                        source={{ uri: 'https://fluent-panda.appspot.com.storage.googleapis.com/dumbbell.svg' }}
                         //source={{ herf: './images/puzzle.svg' }}
                        
                    />
                    {
                        this.state.names.map((item, index) => (
                            <View key={item.id} style={styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>

            </View>
        );
    }
}
ThirdScreen.navigationOptions = {
    title: 'Third Screen',
};
const styles = StyleSheet.create({
    map: {
        height: 400,
        marginTop: 80
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    texttest:{
            fontFamily:'Roboto-Bold.ttf'
    }
})

export default ThirdScreen;
