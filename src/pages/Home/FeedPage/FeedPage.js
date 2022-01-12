import React, { useState } from 'react';
import FeedCard from './FeedCard';
import { FeedContainer } from './styled'
import useRequestData from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import useProctedPage from '../../../hooks/useProtectedPage'
import { SearchContainer } from './styled'
import TextField from '@mui/material/TextField';
import searchIcon from '../../../assets/img/searchIcon/search.png'


export const FeedPage = () => {
  useProctedPage()

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  const [searchName, setSearchName] = useState("")

  const restaurantsList = restaurants
    .filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchName)
    })
    .map((restaurant) => {
      return <div key={restaurant.id}>
        <FeedCard
          src={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
        />
      </div>
    })

  const handleSearch = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <FeedContainer>
      <SearchContainer>
      <img alt="imagem de lupa de busca" src={searchIcon} />
      <TextField id="outlined-basic" label="Pesquisar" variant="outlined" size='small' fullWidth
      value={searchName} onChange={handleSearch} />
    </SearchContainer>
      {restaurantsList}
    </FeedContainer>
  )
}
export default FeedPage;