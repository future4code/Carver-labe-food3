import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TypographyContainer, CardContainer } from './styled'


export const FeedCard = (props) => {
  return (
    <CardContainer>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img" height="100" alt={props.name}
            src={props.src}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" color={"red"} component="div">
              {props.name}
            </Typography>
            <TypographyContainer>
              <Typography variant="body2" color="text.secondary">
                {props.deliveryTime} min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Frete: R$:{props.shipping},00
              </Typography>
            </TypographyContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardContainer>
  )
}
export default FeedCard;