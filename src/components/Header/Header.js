import React from "react";
import Typography from '@mui/material/Typography';
import { HeaderContainer } from "./styled";


export const Header = (props) => {
    return (
        <HeaderContainer>
            <Typography gutterBottom variant="h6" component="div"
            >
                {props.title}</Typography>
        </HeaderContainer>
    )
}

export default Header;