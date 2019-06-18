import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainComponent from './src/components/MainComponent/MainComponent';
import Storage from './src/Lib/Storage';
import {createSwitchNavigator,createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/Login/LoginScreen';
import Product from './src/components/product/Product';
import ChangePasswordComponent from './src/components/myaccount/ChangePasswordComponent';
import LoginDetailsComponent from './src/components/Login/LoginDetailsComponent';
import ProductsByCatComponent from './src/components/ProductsByCat/ProductsByCatComponent';
import CheckoutComponent from './src/components/Checkout/CheckoutComponent';
import AuthLoadingScreen from './src/components/Login/AuthLoadingScreen';
import RegisterationScreen from './src/components/Login/RegisterationScreen';
import WebViewComponent from './src/components/WebViewComponent';
import UnpaidCheckout from './src/components/Checkout/UnpaidCheckout';
import PaidCheckout from './src/components/Checkout/PaidCheckout';
import ProductsByUnPaidComponent from './src/components/UnPaid/ProductsByUnPaidComponent';
//import AuthComponent from './src/components/MainComponent/AuthComponent';
export default class App extends Component {


  render() { 
    return (
        <MApp />
    );
  }
}
const AuthStack = createStackNavigator({ Login: LoginScreen });

const MainNavigator = createStackNavigator({
  
  Home: { screen: MainComponent},
  Register:{ screen: RegisterationScreen},
  ProductScreen: {screen:Product},
  CatProducts: {screen: ProductsByCatComponent},
  LoginDetails: {screen: LoginDetailsComponent},
  ChangePass: {screen: ChangePasswordComponent},
  Checkout: {screen: CheckoutComponent},
  Main: {screen: MainComponent},
  Web: {screen: WebViewComponent},
  UnPaidCK: {screen: UnpaidCheckout},
  PaidCK: {screen: PaidCheckout},
  UnPaidCKProducts: {screen: ProductsByUnPaidComponent},
  },
  {
    initialRouteName: "Home"
  });

const MApp = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: MainNavigator,
  Auth: AuthStack,
}));

//export default MApp;

