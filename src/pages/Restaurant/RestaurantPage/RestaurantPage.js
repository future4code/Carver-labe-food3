import React, { useEffect, useState } from 'react';
import { RestaurantsContainer } from './styled'
import RestaurantCard from './RestaurantCard';
import MenuCard from './MenuCard';
import { useParams } from "react-router-dom"
import { BASE_URL } from '../../../constants/urls'
import useProtectedPage from '../../../hooks/useProtectedPage'
import Header from '../../../components/Header/Header'
import axios from 'axios';

const RestaurantPage = () => {
  useProtectedPage()
  const PathParams = useParams()
  const [restaurant, setRestaurant] = useState({ restaurant: {} })

  useEffect(() => {
    getRestaurantsDetail()
  }, [])

  const getRestaurantsDetail = () => {
    axios.get(`${BASE_URL}/restaurants/${PathParams.restaurantId}`, {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkN1QVc2SjQ1bjhpYW9ESVJXT202IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExNTE1MTE1NTE1MTUxNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiIxLCAyLCAzIC0gNCIsImlhdCI6MTY0MTk5Mjc0OH0.0U_neSAexMoUon4XY0BQidKjHRyM7eSVJW-ifNPFB5o"
      }
    }).then((response) => {
      setRestaurant(response.data.restaurant)
      console.log(response.data.restaurant)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  // console.log(getRestaurantsDetail())
  // const restaurantDetail = restaurant & restaurant.map((detail) => {
  //   return <RestaurantCard
  //key={detail.id}
  //     src={detail.logoUrl}
  //     name={detail.name}
  //     category={detail.category}
  //     deliveryTime={detail.deliveryTime}
  //     shipping={detail.shipping}
  //     address={detail.address}
  //   />
  // })
  //  const productsDetail = restaurant & restaurant.map((product)=>{
  //    return <MenuCard 
  //    key={product.id}
  //    category={product.category}
  //    name={product.name}
  //    src={product.photoUrl}
  //    price={product.price}
  //    descripton={product.description}

  //    />
  //  })


  return (
    <RestaurantsContainer>
      <Header title={'Restaurantes'} />

    </RestaurantsContainer>
  )
}

export default RestaurantPage;