import React from 'react'
import PropTypes from 'prop-types'
import {ToolbarAndroid,StyleSheet, View} from 'react-native';
export default class MainToolbar extends React.Component{
  static propTypes = {
    title: PropTypes.string,
  }

  constructor(props){
    super(props);
}


  render () {

    return (
      <View>
        <ToolbarAndroid
       // logo={require('./app_logo.png')}
        title={this.props.title}
        actions={[{title: 'Settings', show: 'always'}]}
        style={style.toolbar}
        onActionSelected={this.onActionSelected}
        />

      </View>

    )
  }


  onActionSelected = position => {
  if (position === 0) { // index of 'Settings'
  alert(position)
  }
}

}

const style = StyleSheet.create({
  toolbar: {
    backgroundColor: '#f9f9f9',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
