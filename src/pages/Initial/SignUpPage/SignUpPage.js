import React from 'react';
import { ScreenContainer, LogoImage } from './styled';
import logo from '../../../assets/img/logoIcon/red/logo-future-eats-invert@2x.png'
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../../hooks/useUnprotectedPage'
import Header from '../../../components/Header/Header';

const SignUpPage = () =>{
  useUnprotectedPage()
  return(
    <div>
      <Header title={''}/>
      <LogoImage src={logo}/>
      <h3>Cadastrar</h3>
      <SignUpForm/>
    </div>
  )
}

export default SignUpPage;