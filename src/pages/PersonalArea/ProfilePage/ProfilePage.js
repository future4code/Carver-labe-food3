
import React from 'react';
import Header from '../../../components/Header/Header'
  import React from 'react';
  import Box from '@mui/material/Box';
  import { goToEditAdress,goToEditProfile } from '../../../routes/coordinator';
  import Container from '@mui/material/Container';
  import { CardProfile,ProfileBar,PathCopy,Title, Rectangle,Histrico,Text } from './styled';
import { useHistory, useLocation } from 'react-router';
import EditIcon from '@mui/icons-material/Edit';

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );



  export default function ProfilePage () {
    const history= useHistory()
    const location= useLocation()
    

    



    return (
      <Container fixed>
      <Header title={'Perfil'}/>
        <CardProfile>
            <Box>
          <ProfileBar>
            <Title> 
            Meu perfil
            </Title>
            <Rectangle>
            Cadastro
            <EditIcon onClick={()=>goToEditProfile(history)}/>
            </Rectangle>
            <Rectangle>
            Endereço
            <EditIcon onClick={()=>goToEditAdress(history)}/>
            </Rectangle>
            <Histrico>Hisórico de pedido</Histrico>
            <PathCopy>______________________________________________</PathCopy>
            <Text></Text>
          </ProfileBar>
          </Box>
      </CardProfile>
      </Container>
    )
  };