import {React, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CartItem} from '../../components/CartItem/CartItem'
import {GlobalState} from '../../context/GlobalContext/GlobalState'

const CartPage = () =>{
  const {states, setters} = useContext(GlobalState)
  const cart = states.cart
  const history = useHistory()

  const removeFromCart = (itemToRemove) =>{
    const index = cart.findIndex((i) => i.id === itemToRemove.id)
    const newcart = [...cart]

    if(newcart[index].amount === 1) {
      newcart.splice(index, 1)
    } else {
      newCart[index].amaunt -= 1
    }
    setters.setCart(newCart)
  }
  
  let priceToPay = 0
  cart.forEach((pedido => {
    priceToPay += Number(pedido.price)
  })

  const cartCards = cart.map((pedido)=>{
    return <CartItem key=(pedido.id pedido={prod}/>

  })

  return(
    <div>
      

    <h2>Meu Carrinho</h2>
    <h2>endereço de entrega</h2>
    
    {/* itens */}
    <h2>frete</h2> 
    {/* <h2>dados do restaurante</h2> */}
        
    <h2>SUBTOTAL: R$ 00,00</h2>

    <h2>forma de pagamento</h2>
      <h1>Dinheiro</h1>
      <h1>Cartão de crédito</h1>
    
    <h2>total</h2>
   
    
    <button onClick= {()=>(history)}>
    
    confirma
    
    </button>

    </div>
  )
}

export default CartPage;

