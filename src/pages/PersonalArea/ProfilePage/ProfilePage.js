
import React from 'react';
import Header from '../../../components/Header/Header'
import { goToEditAdress, goToEditProfile } from '../../../routes/coordinator';
import { ProfileContainer, Button, FlexCard, HistoryCard } from './styled';
import { useHistory, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EDIT from '../../../assets/img/editIcon/edit.png'
import OrderHistory from '../OrderHistory/OrderHistory';
import useProtectedPage from '../../../hooks/useProtectedPage'


export default function ProfilePage() {
  useProtectedPage()

  const history = useHistory()
  const location = useLocation()

  return (
    <ProfileContainer>
      <Header title={"Meu Perfil"} />
      <CardActionArea>
        <FlexCard>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent >
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Nome   </Typography>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Email   </Typography>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Endereço   </Typography>
            </CardContent>
          </Box>
          <Button onClick={() => goToEditProfile(history)}><img src={EDIT} /></Button>
        </FlexCard>
      </CardActionArea>
      <CardActionArea>
        <FlexCard>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent >
              <Typography variant="subtitle1" color="text.secondary">
                Endereço cadastrado  </Typography>
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Endereço </Typography>
            </CardContent>
          </Box>
          <Button onClick={() => goToEditAdress(history)}><img src={EDIT} /></Button>
        </FlexCard>
      </CardActionArea>
      <FlexCard>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <HistoryCard >
              <Typography variant="subtitle1" fontWeight={'bold'}>
                Histórico de Pedidos  </Typography>
              <OrderHistory/>
            </HistoryCard>
          </Box>
                  </FlexCard>

    </ProfileContainer>
  )
};

