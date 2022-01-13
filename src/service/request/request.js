import axios from "axios";
import { BASE_URL } from "../../constants/urls";


async function getToken() {
  const response = await axios.post(`${BASE_URL}/login`, {
    email: "bruna.gnallis@gmail.com",
    password: "123456",
  });
  return response.data;
}

export async function putAddress(body, clear) {
  const { token } = await getToken();
  const response = await axios.put(`${BASE_URL}/address`, body, {
    headers: { auth: token },
  });
  return response;
}

export async function getAddress() {
  const {token} = await getToken();
  const response = await axios.get(`${BASE_URL}/profile/address`, {
    headers: { auth: token },
  });
  return response.data.address;
}

export async function getOrderHistory () {

  const {token}= await getToken();
  const response = await axios.get(`${BASE_URL}/orders/history`,{
  headers:{auth:token},
});
console.log (response.data);
 
}