import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,MenuContainer } from './styled'

const MenuCard = (props) => {

    
    return (
        <MenuContainer>
            <Typography>Pratos</Typography>
            <Card sx={{ display: 'flex', maxWidth: 345, maxHeight: 100 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 120, height: 130 }}
                    src={props.src}
                    alt={props.category}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '0.5 0 auto' }}>
                    <Typography gutterBottom variant="h7" color={"red"} component="div">
                       {props.name} </Typography>
                        <Typography variant="text" color="text.secondary" component="div">
                        {props.description}
                        </Typography>
                        <Typography variant="text" color="text.secondary" component="div">
                           R$: {props.price}
                        </Typography>
                        <Button>Adicionar</Button>
                    </CardContent>
                    
                </Box>

            </Card>
        </MenuContainer>
    )
}

export default MenuCard;