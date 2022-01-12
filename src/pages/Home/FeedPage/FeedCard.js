import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TypographyContainer } from './styled'

export const FeedCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img" height="100" alt={props.name}
          src={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" color={"red"} component="div">
            {props.name}
          </Typography>
          <TypographyContainer>
            <Typography variant="body2" color="text.secondary">
              {props.deliveryTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frete: {props.shipping}
            </Typography>
          </TypographyContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default FeedCard;