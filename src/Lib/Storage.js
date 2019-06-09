import AsyncStorage from '@react-native-community/async-storage';
export default {

    //check for key
   async isLoggedIn(context){
      let isLoggedIn = await AsyncStorage.getItem('@user').then(item => {
          if(item !== null){
            //   let user = JSON.parse(item);
            //   return user;
            context.setState({'isLoggedIn': true}, () => {
               context.setState({'user': JSON.parse(item)});
            });
            return true;
          }else {
              console.log('does not exists');
              return false;
          }
      });  
    },

    async logout(){
        try{
            await AsyncStorage.removeItem('@user');
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },

    async updateUser(context,user){
        try{
            await AsyncStorage.setItem('@user',JSON.stringify(user));
            await AsyncStorage.setItem('@username', user.name);
            console.log('From storage file: '+user.name);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },

    async returnCart(context){
        try {
            await AsyncStorage.getItem('@cart').then(item => JSON.parse(item))
            .then(res => {
                context.setState({
                    'products': res,
                });
            });
            
        } catch (error) {
            console.log(error);

        }
    }


}