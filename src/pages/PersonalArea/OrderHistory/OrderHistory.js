import React, {useEffect, useState } from 'react';
import { ContainerVazio, Container,TextContainer } from './styled';
import { getOrderHistory } from '../../../service/request/request';
import { CircularProgress } from "@material-ui/core";

export default function OrderHistory() {
  
  const [order, setOrder]= useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getOrderHistory().then((response)=>{
      setOrder( {order: response})
      console.log(order)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
 
return(
  (loading && <CircularProgress />) || (
  <div>
    {order.length > 0 ? <Container> {useEffect} </Container> : <ContainerVazio>
      <TextContainer>Você não realizou nenhum pedido</TextContainer>
        </ContainerVazio>}
  </div>
)

)};