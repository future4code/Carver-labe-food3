/* import axios from 'axios';
import { BASE_URL } from "../../constants/urls";
import AdressForm from '../../pages/AdressPage/AdressForm/AdressForm';

const axiosConfigAdress= {
headers:{
    auth: localStorage.setItem('token')
}};


export const adress=(body,clear)=>{
    axios.put(`${BASE_URL}/address`,body, axiosConfigAdress).then((response)=>{
        AdressForm()
        clear()
    }).catch((err)=>{
        console.log(err.response.data.menssege)
    })
 };  */