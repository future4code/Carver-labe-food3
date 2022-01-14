import axios from "axios";
import { BASE_URL } from "../../constants/urls";


const token= localStorage.getItem('token')

export async function putAddress(body, clear) {
  //const token  = 
  const response = await axios.put(`${BASE_URL}/address`, body, {
    headers:{auth:token},
  });
  return response;
}

export async function getAddress() {
  //const token = localStorage.getItem(token)
  const response = await axios.get(`${BASE_URL}/profile/address`, {
    headers: {auth:token},
  });
  return response.data.address;

}

export async function getOrderHistory () {
  const response = await axios.get(`${BASE_URL}/orders/history`,{
  headers:{auth:token},
});
  console.log (response.data);

}