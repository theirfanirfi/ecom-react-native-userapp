import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainComponent from './src/components/MainComponent/MainComponent';
import Storage from './src/Lib/Storage';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/Login/LoginScreen';
import Product from './src/components/product/Product';
import ChangePasswordComponent from './src/components/myaccount/ChangePasswordComponent';
import LoginDetailsComponent from './src/components/Login/LoginDetailsComponent';
import ProductsByCatComponent from './src/components/ProductsByCat/ProductsByCatComponent';
export default class App extends Component {

  render() {
    return (
        <MApp />
    );
  }
}

const MainNavigator = createStackNavigator({
  
  Home: { screen: MainComponent},
  Login:{ screen: LoginScreen},
  ProductScreen: {screen:Product},
  CatProducts: {screen: ProductsByCatComponent},
  LoginDetails: {screen: LoginDetailsComponent},
  ChangePass: {screen: ChangePasswordComponent},
  },
  {
    initialRouteName: "Home"
  });

const MApp = createAppContainer(MainNavigator);

//export default MApp;

