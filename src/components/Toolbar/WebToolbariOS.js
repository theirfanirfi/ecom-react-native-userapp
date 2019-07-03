import React from 'react'
import PropTypes from 'prop-types'
import {ToolbarAndroid,StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import Storage from '../../Lib/Storage';
import XBar from 'react-native-x-bar'
import Button from 'apsl-react-native-button'
export default class WebToolbariOS extends React.Component{


  constructor(props){
    super(props);
  }

state = {
  'isLoggedOut': false,
}
static propTypes = {
  title: PropTypes.string,
  resCallBack: PropTypes.func.isRequired,
}

returnResToWebReload = (which) => {
  this.props.resCallBack(which);
}
  render () {

    return (
      <View>
        <ToolbarAndroid
       // logo={require('./app_logo.png')}
        title={this.props.title}
        actions={[{title: 'Done', show: 'always'},
      {title: 'Redo', show: 'always'}
      ]}
        style={style.toolbar}
        onActionSelected={this.onActionSelected}
        />

<XBar
        
        slots={[
          { children : <Text style={{fontSize:20}}>{this.props.title}</Text> },
          { children : 
            <TouchableOpacity style={{marginRight:8}}>
            <Button style={{borderWidth: -2,}} onPress={() => this.checkout()}>
              <Text>Done</Text> 
            </Button>
            </TouchableOpacity>  
        },
          { children : <Text></Text> },
          { children : 
          <TouchableOpacity style={{marginRight:8}}>
          <Button style={{borderWidth: -2,}} onPress={() => this.checkout()}>
            <Text>Redo</Text> 
          </Button>
          </TouchableOpacity>
           }
        ]}
        style={style.toolbar}
        layout='space between'
      
      />

      </View>

    )
  }


  onActionSelected = position => {
  if (position === 0) { // index of 'Settings'
  this.returnResToWebReload('done');
  }else if(position === 1){
    this.returnResToWebReload('reload');
  }
}

}

const style = StyleSheet.create({
  toolbar: {
    backgroundColor: '#fff',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop:56
  },
});
