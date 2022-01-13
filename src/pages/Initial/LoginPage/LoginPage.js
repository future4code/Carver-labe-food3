import React from 'react';
import { useHistory } from "react-router-dom";
import { goToRestaurant } from '../../../routes/coordinator' 
import { ScreenContainer, LogoImage, InputsContainer } from './styled';
import logo from '../../../assets/img/logoIcon/logo-future-eats-invert@2x.png'
import { Button, TextField } from '@mui/material';
import useForm from '../../../hooks/useForm';


// LoginPage(email e senha/botao entrar e botao cadastrar)

const LoginPage = () =>{
  const [form, onChange, clear] = useForm({email: "", password: ""})
  const history = useHistory()
  const onSubmitLogin = () => [

  ]

  return(
    <ScreenContainer>
      <LogoImage src={logo}/>
      <p>Entrar</p>
      <InputsContainer>
        <form onSubmit={onSubmitLogin}>
          <TextField
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            fullWidth
            margin={'dense'} 
            required
          />
          <TextField
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            fullWidth
            margin={'dense'}
            required
          />
          <Button
            type={'submit'}
            fullWidth
            variant={"contained"}
            color={'primary'}
            margin={'dense'}          
          >Entrar</Button>
        </form>
      </InputsContainer>


      {/* <button onClick={() => goToRestaurant(history)}>LOGIN</button> */}
    </ScreenContainer>
  )
}

export default LoginPage;