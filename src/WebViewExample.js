import React, { Component } from 'react'

import {
    View,
    WebView,
    StyleSheet
} from 'react-native'
const WebViewExample = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=' }}
            />
        </View>
    )
}
WebViewExample.navigationOptions = {
    title: 'WebView Example',
};
export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})