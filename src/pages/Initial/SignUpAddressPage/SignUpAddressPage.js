import React from 'react'
import AdressForm from "../../AdressPage/AdressForm/AdressForm"
import {ScreenContainer,RetangleContainer} from './styled'

export default function SignUpAdressPage() {
 
  return (
    <RetangleContainer>
    <ScreenContainer>
          Endereço
      <AdressForm/>
      </ScreenContainer>
      </RetangleContainer>
  );
};