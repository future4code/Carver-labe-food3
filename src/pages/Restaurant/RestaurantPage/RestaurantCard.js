import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TypographyContainer } from './styled'


export const RestaurantCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 200 }} >
            <CardMedia
                component="img" height="100" alt="green iguana"
                src={props.src}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" color={"red"} component="div">
                    {props.name} </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.category}</Typography>
                <TypographyContainer>
                    <Typography variant="body2" color="text.secondary">
                        {props.deliveryTime}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Frete: {props.shipping}</Typography>
                </TypographyContainer>
                <Typography variant="body2" color="text.secondary">
                    Endereço: {props.address}</Typography>
            </CardContent>
        </Card>
    )
}

export default RestaurantCard