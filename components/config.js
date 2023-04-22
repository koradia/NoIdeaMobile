import AsyncStorage from "@react-native-async-storage/async-storage";


export const getToken=async()=>{
    const res= await AsyncStorage.getItem('JWT');
    const res2=res.substring(1,res.length-1);
    const Token=('Bearer ' +res2);
    // console.log(Token);
    return Token;
}
export const Url="https://24fe-2409-4071-4e12-20af-1cac-af17-c16b-68cb.in.ngrok.io";







