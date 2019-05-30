import React, { Component } from 'react'
import {View,StyleSheet,Text,FlatList,Platform,TouchableOpacity,TextInput,Button} from 'react-native';
import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import FormInput from '../Reusable/FormInput';
import MainToolbar from '../Toolbar/MainToolbar';
import AwesomeButton from "react-native-really-awesome-button";
export default class ChangePasswordComponent extends Component {
    state = {
        currentpassword: '',
        newpassword: '',
    }
    callBack = (which,text) => {
        this.setState({which:text});
        console.log(which+ " : "+text);
    }

    render() {
        const osBasedToolbar = Platform.OS === 'android' ? <MainToolbar title="Change Password" /> : <MainToolbar title="Change Password"/>;

        return (
            <View>
                {osBasedToolbar}
                <View style={{ justifyContent:'center', alignContent:'center' }}>
                <FormInput callBack={this.callBack} placeholder="Current Password" />
                <FormInput callBack={this.callBack} placeholder="New Password" />
                <AwesomeButton
                
                progress
                backgroundColor='#000'
                style={{ alignSelf: 'center', }}
                onPress={next => {
        /** Do Something **/

        next();
      }}
    >
      Change Password
    </AwesomeButton>
                </View>
            </View>
        )
    }
}
