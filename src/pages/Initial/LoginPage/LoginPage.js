import React from 'react';
import { useHistory } from "react-router-dom";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled';
import logo from '../../../assets/img/logoIcon/red/logo-future-eats-invert@2x.png'
import { Button } from '@mui/material';
import LoginForm from './LoginForm';
import { goToSignUp } from '../../../routes/coordinator'
import useUnprotectedPage from '../../../hooks/useUnprotectedPage'




const LoginPage = () =>{
  useUnprotectedPage()
  const history = useHistory()

  return(
    <ScreenContainer>
      <LogoImage src={logo}/>
      <p>Entrar</p>
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'primary'}
          margin={'dense'}          
        >Não possui cadastro? Clique aqui</Button>
      </SignUpButtonContainer>

      {/* <button onClick={() => goToRestaurant(history)}>LOGIN</button> */}
    </ScreenContainer>
  )
}

export default LoginPage;