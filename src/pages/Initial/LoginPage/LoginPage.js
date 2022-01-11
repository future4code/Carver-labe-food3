import React from 'react';
import { useHistory } from "react-router-dom";
import { goToRestaurant } from '../../../routes/coordinator'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; 


const LoginPage = () =>{
  const history = useHistory()
  return(
    <div>
      LoginPage(email e senha/botao entrar e botao cadastrar)
      <button onClick={() => goToRestaurant(history)}>LOGIN</button>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  )
}

export default LoginPage;