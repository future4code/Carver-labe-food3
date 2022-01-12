import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from './styled'

const MenuCard = () => {
    return (
        <div>
            <Typography>Pratos</Typography>
            <Card sx={{ display: 'flex', maxWidth: 345, maxHeight: 100 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 120, height: 130 }}
                    image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '0.5 0 auto' }}>
                    <Typography gutterBottom variant="h7" color={"red"} component="div">
                        Nome do Prato </Typography>
                        <Typography variant="text" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                        
                    </CardContent>
                    <Button>Adicionar</Button>
                </Box>

            </Card>
        </div>
    )
}

export default MenuCard;