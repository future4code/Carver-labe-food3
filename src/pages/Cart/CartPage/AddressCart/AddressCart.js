import React from 'react';

import { AddressContainer } from '../AddressCart/styled'

const ShowAddress = (props) => {

  return (
    <AddressContainer>
      <div>
        <p>Endereço de entrega</p>
        <p>{props.address}</p>
      </div>
    </AddressContainer>
  )
}

export default ShowAddress;