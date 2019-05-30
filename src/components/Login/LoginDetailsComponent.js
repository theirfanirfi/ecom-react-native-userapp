import React, { Component } from 'react'
import {View,StyleSheet,Text,FlatList,Platform,TouchableOpacity,TextInput,Button} from 'react-native';
import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import FormInput from '../Reusable/FormInput';
import MainToolbar from '../Toolbar/MainToolbar';
import AwesomeButton from "react-native-really-awesome-button";
export default class LoginDetailsComponent extends Component {
    state = {
        fullname: '',
        email: '',
        value: 'irfan ullah',
    }
    callBack = (which,text) => {
        this.setState({which:text});
        console.log(which+ " : "+text);
    }

    render() {
        const osBasedToolbar = Platform.OS === 'android' ? <MainToolbar title="Login Details" /> : <MainToolbar title="Login Details"/>;

        return (
            <View>
                {osBasedToolbar}
                <View style={{ justifyContent:'center', alignContent:'center' }}>
                <FormInput callBack={this.callBack} placeholder="Full name" />
                <FormInput callBack={this.callBack} placeholder="Email" />
                
                <AwesomeButton
                progress
                backgroundColor='#000'
                style={{ alignSelf: 'center', }}
                onPress={next => {
        /** Do Something **/
console.log(this.state.value.replace(/\s+/g, ''));
        next();
      }}
    >
      Update
    </AwesomeButton>
                </View>
            </View>
        )
    }
}
