import React, { useState } from "react";
import Router from './routes/router'
import { ThemeProvider } from '@mui/material';
import theme from './constants/theme';
import styled from 'styled-components';
import { GlobalContext } from '../src/context/GlobalContext/GobalContext'



const MainContainer = styled.div`
  width: 22.5rem;
  height: 35rem;
  position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid #B8B8B8;
  border-radius: 5px ;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
  overflow: scroll;
  overflow-x: hidden;
`

export const App = () => {

  const [cartFood, setCartFood] = useState(undefined);
  


  return (
    <GlobalContext.Provider value={cartFood, setCartFood}>
      <ThemeProvider theme={theme}>

        <MainContainer>
        {/* <ProfileContext> */}
        <Router/>
        {/* </ProfileContext> */}
        </MainContainer>               

      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;