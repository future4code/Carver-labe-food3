import React from 'react';
import {InitialContainer} from './styled'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';  

const InitialPage = () =>{
  return(
    <InitialContainer>
      InitialPage (fundo vermelho e a logo) //utilizada para carregamento inicial
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </InitialContainer>
  )
}

export default InitialPage;