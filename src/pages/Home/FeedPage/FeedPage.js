import React from 'react';
import TextField from '@mui/material/TextField';
import FeedCard from './FeedCard';
import { FeedContainer, SearchContainer } from './styled'
import useRequestData from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import useProctedPage from '../../../hooks/useProtectedPage'
import searchIcon from '../../../assets/img/searchIcon/search.png'

export const FeedPage = () => {
  useProctedPage()

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  console.log(restaurants)

  const restaurantsList = restaurants.map((restaurant) => {
    return <div key={restaurant.id}>
      <FeedCard
        src={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    </div>
  })
  return (
    <FeedContainer>
      <SearchContainer>
        <img alt="imagem de lupa de busca" src={searchIcon} />
        <TextField id="outlined-basic" label="Pesquisar" variant="outlined" size='small' fullWidth />
      </SearchContainer>
      <h4>Categoria</h4>
      {restaurantsList}
    </FeedContainer>
  )
}
export default FeedPage;