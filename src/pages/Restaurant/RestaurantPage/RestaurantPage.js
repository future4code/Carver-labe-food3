import React from 'react';
import {RestaurantsContainer} from './styled'
import RestaurantCard from './RestaurantCard';
import MenuCard from './MenuCard';

const RestaurantPage = () => {
  return(
    <RestaurantsContainer>
      <RestaurantCard/>
      <MenuCard/>

      
    </RestaurantsContainer>
  )
}

export default RestaurantPage;