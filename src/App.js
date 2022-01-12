import React from 'react';
import Router from './routes/router'
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 22.5rem;
  position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

export const App = () => {
  
   return(
    <MainContainer>
      <Router/>
    </MainContainer>
  )
}

export default App;