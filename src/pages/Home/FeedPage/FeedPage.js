import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const FeedPage = () =>{
  return(
   <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
    </Box>
   </div>
  )
}

export default FeedPage;