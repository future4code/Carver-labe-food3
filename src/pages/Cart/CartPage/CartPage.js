import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../../components/ProductCart/ProductCart'
import { GlobalContext} from '../../../context/GlobalContext/GobalContext'
import { getProfile, placeOrder } from '../../../service/request/request'
import { PageContainer, FormButton } from '../CartPage/styled';

import ShowAddress from '../CartPage/AddressCart/AddressCart'
import PaymentMethod from '../CartPage/PaymentMethod/PaymentMethod'
import {
  CartPageContainer,
  AddressContainer,
  RestaurantContainer,
  OrderContainer,
  TotalContainer,
  PaymentContainer
} from '../CartPage/styled';
import useProtectedPage from '../../../hooks/useProtectedPage';
import Loading from '../../../components/Loading/Loading';

const CartPage = () => {

  useProtectedPage()

  const { cartFood, setCartFood } = useContext(GlobalContext);

  const [shippingAddress, setShippingAddress] = useState(undefined);

  const [paymentMethod, setPaymentMethod] = useState('creditcard');

  const payment = [paymentMethod, setPaymentMethod];

  useEffect(() => {
    getShippingAddress()
  }, [setShippingAddress]);

  const getShippingAddress = async () => {
    try {
      const response = await getProfile();
      setShippingAddress(response.user.address);
    } catch (error) {
      console.error(error.response);
    }
  }

  const getSubtotal = () => {
    let subtotal = 0;
    (cartFood ? cartFood.products : []).forEach(product => {
      subtotal += product.quantity * product.price;
    })
    return subtotal
  }

  const subtotal = getSubtotal();

  const removeProduct = (productToRemove) => {
    const newCart = cartFood.products.filter(product => (
      product.id !== productToRemove.id
    ));
    setCartFood({ ...cartFood, products: newCart });
  }

  const submitOrder = async (event) => {
    event.preventDefault();
    const products = (cartFood ? cartFood.products : []).map(product => (
      { id: product.id, quantity: product.quantity }
    ));
    const body = { products, paymentMethod }
    try {
      await placeOrder(body, cartFood.id);
      setCartFood(undefined);
    } catch (error) {
      console.error(error.response);
    }
  }

  return ( <PageContainer>

    {shippingAddress ? (
      <CartPageContainer onSubmit={submitOrder} >
        <AddressContainer>
          <ShowAddress address={shippingAddress} />
        </AddressContainer>
        <OrderContainer>
          {(cartFood ? ((cartFood.products || []).length ? (
            <RestaurantContainer>
              <p>{cartFood.name}</p>
              <p>{cartFood.address}</p>
              <p>{`${cartFood.deliveryTime} min`}</p>
            </RestaurantContainer>
          ) : null) : null)}
          {(cartFood ? cartFood.products : []).length ? cartFood.products.map(product => (
            <ProductCard key={product.id} product={product} showModal={() => null} remove={removeProduct} />
          )) : <p>Carrinho vazio</p>}
          <TotalContainer>
            <p>SUBTOTAL</p>
            <div>
              <p>{`Frete R$${(cartFood ? (cartFood.products.length ? cartFood.shipping.toFixed(2) : '0,00') : '0,00')}`}</p>
              <p>{`R$${(cartFood? (cartFood.products.length ? (subtotal + cartFood.shipping).toFixed(2) : '00,00') : '00,00')}`}</p>
            </div>
          </TotalContainer>
        </OrderContainer>
        <PaymentContainer>
          <PaymentMethod payment={payment} />
          <FormButton 
            type='submit'
            color='primary' 
            variant='contained' 
            disabled={(cartFood ? (cartFood.products.length ? false : true) : true)}
          >
            Confirmar
          </FormButton>
        </PaymentContainer>
      </CartPageContainer>
    ) : <Loading/>}
  </PageContainer>
)
}

export default CartPage;