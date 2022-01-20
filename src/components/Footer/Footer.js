import React from "react";
import { FooterContainer, FooterIcons, Button } from "./styled";
import { goToCart, goToProfile, goToFeed } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import homeIcon from '../../assets/img/homeIcon/homepage.png'
import cartIcon from '../../assets/img/cartIcon/shopping-cart.png'
import profileIcon from '../../assets/img/profileIcon/avatar.png'

export const Footer = () => {
    const history = useHistory()
    return (
        <FooterContainer>
            <FooterIcons>
                <Button onClick={() => goToFeed(history)}>
                    <img alt="botão de home" src={homeIcon} />
                </Button>
                <Button onClick={() => goToCart(history)}>
                    <img alt="botão de carrinho" src={cartIcon} />
                </Button>
                <Button onClick={() => goToProfile(history)}>
                    <img alt="botão do perfil" src={profileIcon} />
                </Button>
            </FooterIcons>
        </FooterContainer>
    )
}
export default Footer;
