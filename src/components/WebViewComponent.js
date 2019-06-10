import React, { Component } from 'react'
import {View,Text} from 'react-native';
import{ WebView }from 'react-native-webview';

export default class WebViewComponent extends Component {
    static = {

    }
    render() {
        return (
            <View style={{ flex:1,justifyContent:'center',alignContent:'center',alignItems: 'center',padding:12,height:'100%' }}>
                <WebView source={{ uri: 'www.google.com' }} />
            </View>
        )
    }
}
