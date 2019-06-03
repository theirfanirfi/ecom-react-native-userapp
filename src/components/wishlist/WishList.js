import React, { Component } from 'react'
import {View,StyleSheet,Text,Platform, Image,FlatList,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon,SearchBar } from 'react-native-elements'
import Base from '../../Lib/Base';
import Storage from '../../Lib/Storage';
export default class WishList extends Component {
    constructor(props){
        super(props);
        this.arrayHolder = [];

    }

    state = {
        data: [],
        value: '',
        user: [],
        isLoggedIn: false,
    }


    async componentDidMount(){
        await Storage.isLoggedIn(this);
       let BASE_URL = Base.getBaseUrl();
       if(this.state.isLoggedIn){
       return fetch(BASE_URL+'user/wishlist?token='+this.state.user.token).then((response) => response.json()).then((res) => {
           this.setState({data: res.products});
           //console.log(res.products);
           this.arrayHolder = res.products;
       });
    }else {
        alert('You are not logged in to perform this action.');
    }
    }

    async addToWhishList(product) {
        let BASE_URL = Base.getBaseUrl();
        if(this.state.isLoggedIn){
        return fetch(BASE_URL+'user/addtowishlist?token='+this.state.user.token+'&pid='+product).then((response) => response.json()).then((res) => {
            if(res.isError){
                alert(res.message);
            }else if(res.isAdded){
                alert(res.message);
            }
        });
     }else {
         alert('You are not logged in to perform this action.');
     }
    }


    seachProducts = text => {
        //  alert(text);
        const searchedData = this.arrayHolder.filter((item) => {
            const pro = `${item.product_name.toUpperCase()}`;
            const textData = text.toUpperCase();
             return pro.indexOf(textData) > -1; 

        });
        this.setState({value: text});

        this.setState({data: searchedData},()=>{
            console.log(searchedData);
        });
      }


    render() {

        return (

                <FlatList
                data={this.state.data}
                renderItem={({ item,index }) => {
                    return (
                        <TouchableOpacity style={{ flex:1,flexDirection: 'column' }}>
                    <View style={{ flex:1,flexDirection: 'column' }} >
                     <Image source={{  uri: item.product_image}} style={style.image}/>
                     <Text style={style.product_title}>{item.product_name}</Text>
                     <View style={{ flex:1,flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={style.pricing}>${item.product_price} </Text>

                    <Icon 
                    name='favorite-border'
                    type='material'
                    iconStyle={{flex:1,alignSelf: 'flex-end',marginRight: 12 }}
                    size={responsiveWidth(6)}
                    onPress={() => this.addToWhishList(item.product_id)}
                    />

                    </View>

                    <Text style={{ margin:4 }}>This is description of the product. you can read it any time whenever you want.</Text>
                    </View>
                    </TouchableOpacity>

                    )

                }}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => {
                    return (
                    <SearchBar
                    placeholder="Search..."
                    lightTheme
                    onChangeText={text => this.seachProducts(text)}
                    autoCorrect={false}
                    value={this.state.value}
                    />
                    )
                }}
                style={{ marginBottom:responsiveHeight(10), }}
                />

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
        width: '95%',
        height: responsiveHeight(35),
        margin: 2,
    },
    pricing: {
        fontSize: responsiveFontSize(1.5),
        color: '#000',
        marginLeft: 4,
        //font: 'bold',
    },

    product_title: {
        fontSize: responsiveFontSize(2),
        color: '#000',
        marginLeft: 4,
        //font: 'bold',
    }

  });
