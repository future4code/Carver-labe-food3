import React from 'react';
import { InitialContainer, LogoContainer } from './styled'
import LOGO from '../../../assets/img/logoIcon/white/logo-future-eats.png'

const InitialPage = () => {
  return (
    <InitialContainer>
      <LogoContainer>
        <img src={LOGO} />
      </LogoContainer>
    </InitialContainer>
  )
}
export default InitialPage;