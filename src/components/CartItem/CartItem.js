import React from 'react'

const CartItem = (props)=>{
    return(
        <ItemContainer>
            <ItemImage></ItemImage>

        <TextContainer>
            <NameText>{props.product.name}</NameText>
            
            <p>
                R${Number(props.product.price).toFixed(2)}{""}
                <b>x{props.product.amount}</b>
            </p>

        </TextContainer>
            <button onClick={()=>props.removeFromCart(props.product)}>
                Remover
            </button>
        </ItemContainer>
    )
}
export default CartItem