import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import {View,StyleSheet,Text,Platform, Image,TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types'
import Button from 'apsl-react-native-button'
import NumericInput from 'react-native-numeric-input'
import Cart from '../../Lib/Cart';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoadProduct extends Component {
    constructor(props){
        super(props);
        this.order = [];
        this.inc = 0;
    }

    static propTypes = {
        product: PropTypes.object.isRequired
    }

    state = {
        numberOfProducts: 1,
        product_id: '',

    }

    addToWhishList = product => {
        console.log("Product id: "+product);
    }

    async addToCart() {
       // this.order.length = 0;
        o = {
            'quantity_ordered': this.state.numberOfProducts,
            'product_id': this.state.product_id
        }
        this.order.push(o);
        //await AsyncStorage.removeItem('@cart');
       let isAdded = Cart.addToCart(this,JSON.stringify(o));
        // if(isAdded){
        //     alert('added');
        // }else {
        //     alert('not added');
        // }        
    }

    componentDidMount(){
        this.setState({product_id: this.props.product.product_id});
    }

    render() {
        return (

            <View style={{ flex:1,flexDirection: 'column' }}>
            <Image source={{  uri: this.props.product.product_image}} style={style.image}/>
            <Text style={style.product_title}>{this.props.product.product_name}</Text>
            <Text style={{  alignSelf: 'flex-start' }} style={style.pricing}>${this.props.product.product_price} </Text>
            
            <TouchableOpacity onPress={() => this.addToWhishList(this.props.product.product_id)}>
                    <Icon 
                    name='favorite-border'
                    type='material'
                    iconStyle={{ marginRight: 12, alignSelf: 'flex-end' }}
                    size={responsiveWidth(7)}

                    />
            </TouchableOpacity>

                    <Text style={{  alignSelf: 'flex-start' }} style={style.pricing}>Stock: {this.props.product.available} </Text>

                    <NumericInput 
                    containerStyle={{ alignSelf:'center',marginTop:responsiveHeight(2) }}
                    value={this.state.numberOfProducts} 
                    onChange={value => this.setState({numberOfProducts: value})} 
                    onLimitReached={(isMax,msg) => alert('No more products are available in the store.')}
                    totalWidth={100} 
                    totalHeight={50} 
                    iconSize={10}
                    step={1}
                    valueType='real'
                    rounded 
                    maxValue={this.props.product.available}
                    textColor='#B0228C' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#34D27C' 
                    leftButtonBackgroundColor='#34D27C'/>

                    <Button onPress={() => this.addToCart()} style={{ backgroundColor: '#34D27C', marginTop:responsiveHeight(2),width: responsiveWidth(35),alignSelf:'center',color:'#fff'}} textStyle={{fontSize: 18}}>
                    <Icon name="shopping-cart" type="material" iconStyle={{ color:'#fff' }}/>
                    <Text style={{ color:'#fff' }}> Add to Cart</Text>
                    </Button>


           </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    image: {
        width: '100%',
        height: responsiveHeight(35),
        margin: 4,
    },
    pricing: {
        fontSize: responsiveFontSize(2.5),
        color: '#000',
        marginLeft: 4,
        //font: 'bold',
    },

    product_title: {
        fontSize: responsiveFontSize(3),
        color: '#000',
        marginLeft: 4,
        //font: 'bold',
    }

  });
