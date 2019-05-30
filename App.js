import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainComponent from './src/components/MainComponent/MainComponent';
export default class App extends Component {
  render() {
    return (
      <View>
        <MainComponent />
      </View>
    );
  }
}

