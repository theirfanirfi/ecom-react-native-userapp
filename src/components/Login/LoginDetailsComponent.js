import React, { Component } from 'react'
import {View,StyleSheet,Text,FlatList,Platform,TouchableOpacity,TextInput,Button} from 'react-native';
import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import FormInput from '../Reusable/FormInput';
import MainToolbar from '../Toolbar/MainToolbar';
import AwesomeButton from "react-native-really-awesome-button";
import Storage from '../../Lib/Storage';
export default class LoginDetailsComponent extends Component {
    state = {
        fullname: '',
        email: '',
        isLoggedIn: false,
        user: []
    }
    callBack = (which,text) => {
        if(which === 'fullname'){
            this.setState({'fullname':text});

        }else if(which === 'email'){
            this.setState({'email':text});
        }
    }
    async componentDidMount(){
        await Storage.isLoggedIn(this);
        if(this.state.isLoggedIn){
            console.log('Logged in ');
            this.setState({'email': this.state.user.email});
            console.log(this.state.user.email);
        }else {
            alert('You are not logged in.');
        }
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
