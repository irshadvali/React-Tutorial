import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import ImageSlider from 'react-native-image-slider';      //npm install react-native-image-slider --save
import Infoslider from 'react-native-infoslider'
class ImageSliderView extends React.Component {   
    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null
        };
    }
 
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        var { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.container}>
                <ImageSlider
                    images={[
                        `http://res.cloudinary.com/homehapp/image/upload/v1481006847/static/homehapp1.jpg`,
                        `http://res.cloudinary.com/homehapp/image/upload/v1481006847/static/homehapp2.jpg`,
                        `http://res.cloudinary.com/homehapp/image/upload/v1481006847/static/homehapp3.jpg`,
                        'http://res.cloudinary.com/homehapp/image/upload/v1481006847/static/homehapp1.jpg'
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
            </View>
                
            </View>
        );
    }
}
ImageSliderView.navigationOptions = {
    title: 'ImageSlider Screen',
};

const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    }
})

export default ImageSliderView;
