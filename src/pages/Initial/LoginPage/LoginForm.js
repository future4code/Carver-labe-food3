import React from 'react';
import {InputsContainer} from './styled';
import { Button, TextField } from '@mui/material';
import useForm from '../../../hooks/useForm';
import { login } from '../../../service/profile';
import { useHistory } from 'react-router-dom';


// LoginPage(email e senha/botao entrar e botao cadastrar)

const LoginForm = () =>{
  const [form, onChange, clear] = useForm({email: "", password: ""})

  const history = useHistory()

  const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, clear, history)
  }

  return(
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
  )
}

export default LoginForm;