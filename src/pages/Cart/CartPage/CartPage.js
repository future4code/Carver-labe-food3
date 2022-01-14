import React from 'react';
import useProtectedPage from '../../../hooks/useProtectedPage';
import Header from '../../../components/Header/Header'



const CartPage = () =>{
  useProtectedPage()
  return(
    <div>
      <Header title={'Meu Carrinho'}/>
      
     CartPage(endereço de entrega / dados do restaurante / pedido subtotal, frete e total
     forma de pagamento botao confirma)
    </div>
  )
}

export default CartPage;