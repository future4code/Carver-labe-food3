import React from 'react'
import {useHistory} from 'react-router-dom'
import {goToCart} from '../../routes/router'

const CartButton = () =>{
    const history = useHistory()
    return(

        <button onClick={()=>goToCart(history)}>
    
        </button>
    )
}
//olhar no video como add a imagem carrinho e baixar do zeplin

export default CartButton