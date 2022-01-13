import React, { useState } from 'react';
import useRequestData from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



export const Category = () => {
    const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
    const [value, setValue] = useState("")
    const handleSearch = (event) => {
        setValue(event.target.value)
    }
    const categories = restaurants && restaurants
        .filter((restaurant) => {
            return restaurant.category.toLowerCase().includes(value)
        })
        .map((category) => {
            return (<Box sx={{ width: '100%', borderColor: 'divider' }}>
                <Tabs
                    value={value} onChange={handleSearch}>
                    <Tab label={category.category} />
                </Tabs>
            </Box>
            )
        })



    return (
        <div>
            {categories}
        </div>
    )
}

export default Category;