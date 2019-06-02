import AsyncStorage from '@react-native-community/async-storage';
export default {
    async addToCart(context,product){
        //await AsyncStorage.removeItem('@cart');
        
        await AsyncStorage.getItem('@cart')
        .then(cart => {
            if(cart !== null){
               let orders = JSON.parse(cart);
               let pro = JSON.parse(product);
                //console.log(JSON.stringify(cart));
                let matched = false;
                orders.some(o => {
                    if(o.product_id === pro[0].product_id ){
                        let index = orders.indexOf(o);
                        orders.splice(index,1);
                        orders.push(pro);
                        try {
                            AsyncStorage.setItem('@cart',JSON.stringify(orders));
                            matched = true;
                            return o;
                        } catch (error) {
                        console.log('matched error '+error);
                            
                        }
                       // console.log('matched '+index);
                    }
                    
                    // else {
                    //     console.log('not matched :'+pro[0].product_id+ " : "+o.product_id);
                    // }
                });
                
                if(matched){
                    console.log('matched block');
                }else {
                    orders.push(pro);
                    try {
                        AsyncStorage.setItem('@cart',JSON.stringify(orders));
                        console.log('not matched block set item done');
                    } catch (error) {
                        console.log('not matched block error: '+error);                        
                    }
                    //console.log('not matched block');
                }

            AsyncStorage.getItem('@cart').then(cart => console.log(cart));
            }else {
                try {
                 AsyncStorage.setItem('@cart',product);                    
                } catch (error) {
                console.log(error);
                    
                }
                console.log(' null');

            }
        })
    }
}