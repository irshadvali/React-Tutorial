import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Infoslider from 'react-native-infoslider'; //npm i react-native-infoslider --save
import MapView from 'react-native-maps';
//https://www.youtube.com/watch?v=s23HPMdifvI&feature=youtu.be
class ImageInfoSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    title: "Hello World",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
                    image: require('./images/1.jpg'),
                },
                {
                    title: "Test One",
                    text: "Test One text",
                    image: require('./images/2.jpg'),
                },
            ]
        };
    }
    render() {
        var { navigate } = this.props.navigation;
        return (
            <Infoslider
                data={this.state.data}
                showDots={true}
                activeDotColor="#04B4AE"
                titleColor="#000"
                textColor="#666"
                loop={false}
                autoplay={true}
                autoplayTimeout={10} />

        );

        
    }
}
ImageInfoSlider.navigationOptions = {
    title: 'ImageInfoSlider Screen',
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    }
})

export default ImageInfoSlider;
