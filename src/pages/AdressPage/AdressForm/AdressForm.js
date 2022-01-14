import { Button, TextField, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import { InputsContainer } from '../styled';
import { putAddress, getAddress } from "../../../service/request/request";
import { useLocation } from "react-router-dom";

export default function AdressForm() {
  const [form, onChange, clear, setForm] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    putAddress(form)
      .then((response) => {
        if (response.status === 200) {
          if (isEditing) {
            alert("Endereço editado com sucesso!");
          } else {
            alert("Endereço cadastrado com sucesso!");
            clear();
          }
        } else {
          alert("Erro ao cadastrar endereço!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (location.pathname === "/address/edit") {
      setIsEditing(true);
      getAddress()
        .then((response) => {
          setForm(response);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setIsEditing(false);
      setLoading(false);
    }
  }, [setForm, location.pathname]);

  return (
    (loading && <CircularProgress />) || (
      <InputsContainer>
        <form onSubmit={handleSubmit}>
          <TextField
            name={"street"}
            value={form.street}
            onChange={onChange}
            label={"Rua/Av."}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"street"}
          />
          <TextField
            name={"number"}
            value={form.number}
            onChange={onChange}
            label={"Número"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            label={"Complemento"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            label={"Bairro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"neighbourhood"}
          />
          <TextField
            name={"city"}
            value={form.city}
            onChange={onChange}
            label={"Cidade"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"city"}
          />
          <TextField
            name={"state"}
            value={form.state}
            onChange={onChange}
            label={"Estado"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"state"}
          />
          <Button
            type={"submit"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            color={"primary"}
          >
            Salvar
          </Button>
        </form>
      </InputsContainer>
    )
  );
}
