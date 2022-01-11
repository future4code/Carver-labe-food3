import React from 'react';
import { useHistory } from "react-router-dom";
import { goToRestaurant } from '../../../routes/coordinator'


const LoginPage = () =>{
  const history = useHistory()
  return(
    <div>
      LoginPage(email e senha/botao entrar e botao cadastrar)
      <button onClick={() => goToRestaurant(history)}>LOGIN</button>
    </div>
  )
}

export default LoginPage;