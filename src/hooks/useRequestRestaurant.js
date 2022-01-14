// import { useEffect, useState } from "react";
// import axios from 'axios'

// const useRequestRestaurant= (initial, url) => {
//     const [restaurant, setRestaurant] = useState(initial)

//     useEffect(() => {
//         axios.get(`${BASE_URL}/restaurants/${PathParams.restaurantId}`, {
//             headers: {
//               auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkN1QVc2SjQ1bjhpYW9ESVJXT202IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExNTE1MTE1NTE1MTUxNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiIxLCAyLCAzIC0gNCIsImlhdCI6MTY0MTk5Mjc0OH0.0U_neSAexMoUon4XY0BQidKjHRyM7eSVJW-ifNPFB5o"
//              // localStorage.getItem('token')  
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