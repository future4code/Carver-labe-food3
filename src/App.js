import React from 'react';
import Router from './routes/router'
import { ThemeProvider } from '@mui/material';
import theme from './constants/theme';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 22.5rem;
  height: 30rem;
  position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
  overflow: scroll;
`

export const App = () => {
  
   return(
     <ThemeProvider theme={theme}>
    <MainContainer>
      <Router/>
    </MainContainer>
    </ThemeProvider>
  )
}

export default App;