import React, { Component } from 'react'
import {View,Text, Dimensions} from 'react-native';
import { WebView }from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default class WebViewComponent extends Component {
    static = {

    }

    state = {
        height: 0,
        indeterminate: false,
        animated: false,
    }

    loadStarted = () => {
        this.setState({height: 20, indeterminate: true, animated: true});
        console.log('Load started');
    }
    loadEnded = () => {
        this.setState({height: 0, indeterminate: false, animated: false});
      
        console.log('Load ended');
    }
    onLoad(){
        console.log('Load');

    }
    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={{ flex:1,justifyContent:'center',alignContent:'center',width:'100%',height:'100%' }}>
                <Progress.Bar height={this.state.height} indeterminate={this.state.indeterminate} animated={this.state.animated} style={{  width:'100%', }} />
                <View style={{ width:'100%',height:'100%' }}>
                <WebView source={{ uri: 'https://www.google.com' }}  style={{ width:'100%',height:'100%' }} onLoad={this.onLoad} onLoadStart={this.loadStarted} onLoadEnd={this.loadEnded} >
                </WebView>
                </View>
            </View>
        )
    }
}
