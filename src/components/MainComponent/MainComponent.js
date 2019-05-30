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
export default class MainComponent extends React.Component{


  render () {
        const osBasedToolbar = Platform.OS === 'android' ? <MainToolbar /> : <MainToolbar/>;
    return (
      <View>
        {/* <ProductsComponent /> */}
        <Product />
        {/* <CategoriesComponent /> */}
        {/* <ProductsByCatComponent /> */}
        {/* <SettingsComponent /> */}
        {/* <LoginDetailsComponent /> */}
        {/* <ChangePasswordComponent /> */}
      </View>
    )
  }
}
