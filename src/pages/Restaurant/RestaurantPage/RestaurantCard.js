import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TypographyContainer } from './styled'


export const RestaurantCard = () => {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 200}} >
                         <CardMedia
                    component="img" height="100" alt="green iguana"
                    image="https://i3.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color={"red"} component="div">
                        Restaurante </Typography>
                    <Typography variant="body2" color="text.secondary">Burguer</Typography>
                    <TypographyContainer>
                        <Typography variant="body2" color="text.secondary">Tempo     .</Typography>
                        <Typography variant="body2" color="text.secondary">Frete</Typography>
                    </TypographyContainer>
                    <Typography variant="body2" color="text.secondary">Endereço</Typography>
                </CardContent>
                    </Card>
    )
}

export default RestaurantCard