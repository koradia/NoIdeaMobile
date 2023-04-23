import AsyncStorage from "@react-native-async-storage/async-storage";


export const getToken=async()=>{
    const res= await AsyncStorage.getItem('JWT');
    const res2=res.substring(1,res.length-1);
    const Token=('Bearer ' +res2);
    // console.log(Token);
    return Token;
}
export const Url="https://7e54-119-161-98-68.ngrok-free.app";







