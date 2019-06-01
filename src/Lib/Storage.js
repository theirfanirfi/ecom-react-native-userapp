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
    }


}