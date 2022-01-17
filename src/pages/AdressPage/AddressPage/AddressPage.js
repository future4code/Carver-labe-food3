import React from 'react'
import AdressForm from "../AdressForm/AdressForm";
import {ScreenContainer,RetangleContainer} from '../styled'

export default function AddressPage(props) {
  const street= props.street
  return (
    <RetangleContainer>
    <ScreenContainer>
          Endereço
      <AdressForm/>
    </ScreenContainer>
    </RetangleContainer>
  );
};