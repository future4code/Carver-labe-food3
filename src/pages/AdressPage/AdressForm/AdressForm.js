import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import useForm from "../../../hooks/useForm"
import {InputsContainer} from './styled'
import { adress } from '../../../servece/request/resquest';

export default function AdressForm() {
 const [form, onChange, clear]=useForm({street: "",
 number: "",
 neighbourhood: "",
 city: "",
 state: "",
 complement: ""});
const[adressProfile, setAdressProfile]=useState([])

 const onSubmitForm= (e) => {
  e.preventDefault()
  adress(form, clear)
 };
 
 
  return (
  
      <InputsContainer>
      <form onSubmit={onSubmitForm}>
      <TextField
      name={"street"}
      value={form.street}
      onChange={onChange}
      label={"Rua/Av."}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      required
      type={'street'}/>
       <TextField
      name={"number"}
      value={form.number}
      onChange={onChange}
      label={"Número"}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      required/>
       <TextField
      name={"complement"}
      value={form.complement}
      onChange={onChange}
      label={"Complemento"}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      />
       <TextField
      name={"neighbourhood"}
      value={form.neighbourhood}
      onChange={onChange}
      label={"Bairro"}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      required
      type={'neighbourhood'}/>
       <TextField
      name={"city"}
      value={form.city}
      onChange={onChange}
      label={"Cidade"}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      required
      type={'city'}/>
       <TextField
      name={"state"}
      value={form.state}
      onChange={onChange}
      label={"Estado"}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      required
      type={'state'}/>
      <Button
      type={'submit'}
      variant={'outlined'}
      fullWidth
      margin={"normal"}
      color={"primary"}>
        Salvar</Button>
    </form>
      </InputsContainer>
  );
};