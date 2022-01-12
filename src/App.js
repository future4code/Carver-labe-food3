import React from 'react';
import Router from './routes/router'
import GlobalState from './context/GlobalContext/GlobalState';
import { ThemeProvider } from '@emotion/react';
import theme from './constants/theme';

export const App = () => {
  
   return(
    <GlobalState>
      <ThemeProvider theme={theme}>
      <Router/>
      </ThemeProvider>
    </GlobalState>
  )
}

export default App;