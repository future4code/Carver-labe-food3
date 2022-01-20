import React, { useState } from 'react';
import FeedCard from './FeedCard';
import { FeedContainer, SearchContainer } from './styled'
import useRequestData from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../../constants/urls'
import useProctedPage from '../../../hooks/useProtectedPage'
import TextField from '@mui/material/TextField';
import searchIcon from '../../../assets/img/searchIcon/search.png'
import Category from './Category';
import { goToRestaurant } from '../../../routes/coordinator';
import Header from '../../../components/Header/Header';

export const FeedPage = () => {
  useProctedPage()
  
  const history = useHistory()
  const [searchName, setSearchName] = useState("")
  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  
  const restaurantsList = restaurants && restaurants
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
          onClick={() => goToRestaurant(history, restaurant.id)}
        />
      </div>
    })

  const handleSearch = (event) => {
    setSearchName(event.target.value)
  }

  return (

    <FeedContainer >
      <Header title={'Ifuture'}/>
      <SearchContainer>
        <img alt="imagem de lupa de busca" src={searchIcon} />
        <TextField id="outlined-basic" label="Pesquisar" variant="outlined" size='small' fullWidth
          value={searchName} onChange={handleSearch} />
      </SearchContainer>

      <Category />

      {restaurantsList}
     

    </FeedContainer>
  )
}
export default FeedPage;