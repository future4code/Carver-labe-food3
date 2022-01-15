import {React, useContext} from 'react';
import {useHistory} from 'react-router-dom'
// import {GlobalState} from '../../context/GlobalContext/GlobalState'
import useProtectedPage from '../../../hooks/useProtectedPage';
import Header from '../../../components/Header/Header'



const CartPage = () =>{
  useProtectedPage()

  // const address = useRequestData(`${BASE_URL}/profile/address`)

  // const {states, setters} = useContext(GlobalState)
  // const cart = states.cart
  // const history = useHistory()

  // const removeFromCart = (itemToRemove) =>{
  //   const index = cart.findIndex((i) => i.id === itemToRemove.id)
  //   const newcart = [...cart]

  //   if(newcart[index].amount === 1) {
  //     newcart.splice(index, 1)
  //   } else {
  //     newCart[index].amaunt -= 1
  //   }
  //   setters.setCart(newCart)
  // }
  
  // let priceToPay = 0
  // cart.forEach((pedido => {
  //   priceToPay += Number(pedido.price)
  // })

  // const cartCards = cart.map((pedido)=>{
  //   return <CartItem key=(product.id product={prod}/>

  // })

  return(
    <div>
Carrinho
      {/* <Header title={'Meu Carrinho'}/>
      
    
      <p>Endereço de entrega</p>
      <p>{address && address.address.street}, {address && address.address.number} - {address && address.address.neighbourhood}</p>

      {cart.length ?
        <div>
          <h4>{restaurant.name}</h4>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime}</p>

          {cart.map(product => {
            return <ProductCard product={product} />
          })}
          
        </div>

        : <p>Carrinho Vazio</p>}

    <h2>Meu Carrinho</h2>
    <h2>endereço de entrega</h2>
    
  
    <p> Frete R$ {cart.length ? restaurant.shipping : "00"}, 00 </p> 
    
        
    <div>

    <h3>SUBTOTAL: R$ 00,00</h3>
    <p>R${Valores}, 00 </p>
    </div>
   

    <p>forma de pagamento</p>

      <input type= {"radio"} name = {"payment"}/>
      <label>Dinheiro</label>

      <input type= {"radio"} name = {"payment"}/>
      <label>Cartão de crédito</label>
    
        
    <button onClick= {()=>(history)}>
    
    confirma
    
    </button>
 */}

    </div>
  )
}

export default CartPage;