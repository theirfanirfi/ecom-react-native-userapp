import React, { Component } from 'react'
import MainToolbar from '../Toolbar/MainToolbar';
import LoadProduct from './LoadProduct';
import ProductNotFound from '../NotFound/ProductNotFound';
import {View,Platform} from 'react-native';
import Base from '../../Lib/Base';



export default class Product extends Component {
    state = {
        product: {
            // product_id: '',
            // product_name: '',
            // product_price: '',
            // product_image: {uri: ''},
        }
    }

    async componentDidMount(){
        let BASE_URL = Base.getBaseUrl();
        let id = 7;
        return fetch(BASE_URL+'product/'+id).then(response => response.json()).then((res) => {
            if(res.isError){
                alert(res.message);
            }else if(res.isFound){
                this.setState({product: res});
            }else {
                alert(res.message);
            }

            console.log(res);
            console.log("Product: "+this.state.product);
        });
    }


    render() {
        const osBasedToolbar = Platform.OS === 'android' ? <MainToolbar title="Product" /> : <MainToolbar title="Product" />;
        const loadProduct = this.state.product.isFound == true ? <LoadProduct product={this.state.product.product} /> : <ProductNotFound />;
        return (

            <View>
                {osBasedToolbar}
                {loadProduct}
            </View>
        )
    }
}



