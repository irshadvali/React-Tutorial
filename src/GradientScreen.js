import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
class GradientScreen extends React.Component {
      state = {
      myfirstColor: '#f857a6',
      mysecodColor: '#ff5858',
    myfirstColorD: '#02AAB0',
      mysecodColorD: '#00CDAC',
   }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scvwcontainer}>
                    <Text>comming Soon</Text>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 0.5, 0.8]}
                        colors={['#22c1c3', '#f05053', '#fdbb2d']}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>

                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 1]}
                        colors={['#5f2c82', '#49a09d']}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 1]}
                        colors={['#36D1DC', '#5B86E5']}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 1]}
                        colors={['#30E8BF', '#FF8235']}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 1]}
                        colors={[this.state.myfirstColor, this.state.mysecodColor]}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 1]}
                        colors={[this.state.myfirstColorD, this.state.mysecodColorD]}
                        style={styles.linearGradient}>
                        <View style={styles.userCard_layout}>
                            <Text style={styles.header_txt}>Company Information</Text>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Name       :</Text>
                                <Text style={styles.label_txt}>Xelpmoc Dedign and Tech</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Type         :</Text>
                                <Text style={[styles.label_txt, styles.textP]}>Software Company</Text>
                            </View>

                            <View style={styles.card_content}>
                                <Text style={styles.label_txt}>Email        :</Text>
                                <Text style={styles.label_txt}>developer@xelpmoc.in</Text>
                            </View>

                        </View>
                    </LinearGradient>

                </ScrollView>
            </View>
        );
    }
}
GradientScreen.navigationOptions = {
    title: 'Gradient Screen',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        color: '#4f603c',
        textAlign: 'left',
    },
    linearGradient: {
        height: 150,
        borderRadius: 2,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },

    card_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userCard_layout: {
        flexDirection: 'column',
        width: 350,
        height: 150,
        padding: 15,
    },
    label_txt: {
        color: 'white',
        fontSize: 15,
        marginTop: 10
    },
    header_txt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    scvwcontainer: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'column',
    },
})

export default GradientScreen;
