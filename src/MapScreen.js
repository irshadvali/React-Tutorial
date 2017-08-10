import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import MapView from 'react-native-maps';
//https://www.youtube.com/watch?v=s23HPMdifvI&feature=youtu.be
class MapScreen extends React.Component {

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.mapst}
                    initialRegion={{
                        latitude: 12.9716,
                        longitude: 77.5946,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>

                    <MapView.Marker
                        coordinate={{
                            latitude: 12.9716,
                            longitude: 77.5946,
                        }}
                    >
                   {/* <View style={styles.radius}>
                       <View style={styles.marker}></View>
                       </View> */}
                    </MapView.Marker>
                </MapView>

            </View>
        );


    }
}
MapScreen.navigationOptions = {
    title: 'Map Screen',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    },
    mapst: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: '#1d1d1d',
        borderColor: 'green',
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
       marker: {
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#666666',
        borderColor: 'white',
        borderRadius:3,
    
    }

})

export default MapScreen;
