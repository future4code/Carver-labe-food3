import React, { useState } from 'react';
import useRequestData from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';





export const Category = () => {
    const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
    const [categorySearch, setCategorySearch] = useState("")
    const [value, setValue] = useState(0);

    
    const handleCategory = (value) =>{
        setCategorySearch(value)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const categoryRestaurant = restaurants
    .filter((categories) => {
        return categories.category.includes(categorySearch)
        
    })
    
                console.log(categoryRestaurant)

    return (
        <Box sx={{ maxWidth: 490, bgcolor: 'background.paper' }}>
           <Tabs
                onChange={handleChange}
                value={value}
                variant="scrollable"
                scrollButtons={true}
            >
                <Tab style={{ textTransform: 'none'}} label="Todos" />
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Asiática")} label="Asiática"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Árabe")} label="Árabe"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Mexicana")} label="Mexicana"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Italiana")} label="Italiana"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Baiana")} label="Baiana"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Petiscos")} label="Petiscos"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Hamburguer")} label="Hamburguer"/>    
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Carnes")} label="Carnes"/>
                <Tab style={{ textTransform: 'none'}} onClick={() => handleCategory("Sorvetes")} label="Sorvetes"/>
                
                
                
            </Tabs>
            {/* <TabPanel value={value} index={0}>teste</TabPanel> */}
        </Box>
    );
}

export default Category;