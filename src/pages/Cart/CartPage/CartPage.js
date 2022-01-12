import React from 'react';
import useProtectedPage from '../../../hooks/useProtectedPage';


const CartPage = () =>{
  useProtectedPage()
  return(
    <div>
     CartPage(endereço de entrega / dados do restaurante / pedido subtotal, frete e total
     forma de pagamento botao confirma)
    </div>
  )
}

export default CartPage;