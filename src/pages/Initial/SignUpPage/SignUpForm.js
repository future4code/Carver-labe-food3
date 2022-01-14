import React from 'react';
import { useHistory } from "react-router-dom";
import {InputsContainer, SignUpButtonContainer} from './styled';
import { Button } from '@mui/material';
import useForm from '../../../hooks/useForm';
import TextField from '@mui/material/TextField';
import { signUp } from '../../../service/profile';

const SignUpForm = () =>{
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  })
  
  const history = useHistory()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history)
  }

  return(
    <div>
        <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            type={"name"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            fullWidth
            margin={'dense'} 
            required
          />

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
            type={"cpf"}
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            label={"CPF"}
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

          <TextField
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Confirmar senha"}
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
          >Criar</Button>
        </form>
        {/* </Box> */}
        </InputsContainer>
    </div>
  )
}

export default SignUpForm;