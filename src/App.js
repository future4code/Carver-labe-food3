import React, { useState } from "react";
import Router from './routes/router'
import { ThemeProvider } from '@mui/material';
import theme from './constants/theme';
import styled from 'styled-components';
import { GlobalContext } from '../src/context/GlobalContext/GobalContext'

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

  const [profile, setProfile] = useState({});


  return (
    <GlobalContext.Provider value={{ profile, setProfile }}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;