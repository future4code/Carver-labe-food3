import React from 'react';
import { ScreenContainer, LogoImage } from './styled';
import logo from '../../../assets/img/logoIcon/logo-future-eats-invert@2x.png'
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../../hooks/useUnprotectedPage'

const SignUpPage = () =>{
  useUnprotectedPage()
  return(
    <ScreenContainer>
      <LogoImage src={logo}/>
      <p>Cadastrar</p>
      <SignUpForm/>
    </ScreenContainer>
  )
}

export default SignUpPage;