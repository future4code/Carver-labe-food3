// import { useEffect, useState } from "react";
// import axios from 'axios'

// const useRequestRestaurant= (initial, url) => {
//     const [restaurant, setRestaurant] = useState(initial)

//     useEffect(() => {
//         axios.get(`${BASE_URL}/restaurants/${PathParams.restaurantId}`, {
//             headers: {
//                 auth:  localStorage.getItem('token') 
//             }
//           }).then((response) => {
//             setRestaurant(response.data.restaurant.products)
//             console.log(`useRequestRestaurant ${response.data.restaurant.products}`)
//           }).catch((err) => {
//             console.log(`useRequestRestaurant ERRO ${err.response.data}`)
//           })

//     }, [url])

//     return (restaurant)
// }

// export default useRequestRestaurant;