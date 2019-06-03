import React from 'react'
//import PropTypes from 'prop-types'
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainToolbar from '../Toolbar/MainToolbar';
//import style from '../../styles/appstyles.module.css'
import ProductsComponent from '../products/ProductsComponent';
import Product from '../product/Product';
import CategoriesComponent from '../categories/CategoriesComponent';
import ProductsByCatComponent from '../ProductsByCat/ProductsByCatComponent';
import SettingsComponent from '../myaccount/SettingsComponent';
import LoginDetailsComponent from '../Login/LoginDetailsComponent';
import ChangePasswordComponent from '../myaccount/ChangePasswordComponent';
import LoginScreen from '../Login/LoginScreen';
import BottomNav from '../../components/MainComponent/BottomNav';
import WishList from '../../components/wishlist/WishList';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class MainComponent extends React.Component{
  state = {
    activeTab: 'products',
  }
  callBack = tab => {
    this.setState({activeTab: tab});
    console.log(tab);
  }

  renderComponent = () => {
    if(this.state.activeTab === 'products'){
      return (
        <View>
        <ProductsComponent/>
        </View>
      )
    }
  }
  render () {
        const osBasedToolbar = Platform.OS === 'android' ? <MainToolbar /> : <MainToolbar/>;
        let loadComponent = <ProductsComponent />;
        if(this.state.activeTab === 'products'){
          loadComponent = <ProductsComponent />;
        }else if(this.state.activeTab === 'categories'){
          loadComponent = <CategoriesComponent />;
        }else if(this.state.activeTab === 'account'){
          loadComponent = <SettingsComponent />;
        }else if(this.state.activeTab === 'cart'){

        }else if(this.state.activeTab === 'wishlist'){
          loadComponent = <WishList />
        }
    return (
      <View style={{ height:'100%' }}>
        {/* <ProductsComponent /> */}
        {/* <Product /> */}
        {/* <CategoriesComponent /> */}
        {/* <ProductsByCatComponent /> */}
        {/* <SettingsComponent /> */}
        {/* <LoginDetailsComponent /> */}
        {/* <ChangePasswordComponent /> */}

        {/* <LoginScreen /> */}

        {loadComponent}
       


        <BottomNav callBack={this.callBack} />
       
      </View>
    )
  }
}

const style = StyleSheet.create({

  container: {
  
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
  }
  
  });
