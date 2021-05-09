import Axios from "axios";
import config from "../config";
import { loginUser, newUser ,resetPassword as resetPasswordInterface} from "../interfaces/interface";

export const createUser = async(userData:newUser)=>{
    try {
        const newUser = await Axios.post(`${config.basuUrl}/auth/local/register`,{...userData});
        return newUser || {};
    } catch (error) {
        console.error(error.response);
        
    }

}
export const LoginUser = async(userData:loginUser)=>{
    try {
        const newUser = await Axios.post(`${config.basuUrl}/auth/local`,{...userData});
        return newUser || {};
    } catch (error) {
        console.error(error.response);
        
    }

}
export const sendForgotPasswordMail = async(email:string)=>{
    try {
        const response = await Axios.post(`${config.basuUrl}/auth/forgot-password`,{email});
        return response || null;
    } catch (error) {
        console.error(error.response);
        
    }
}
export const resetPassword = async(resetData:resetPasswordInterface)=>{
    try {
        const response = await Axios.post(`${config.basuUrl}/auth/reset-password`,{...resetData});
        return response || null;
    } catch (error) {
        console.error(error.response);
        
    }
}