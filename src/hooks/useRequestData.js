import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth:  localStorage.getItem('token')    
            }
        })
            .then((response) => {
                setData(response.data.restaurants)

            })
            .catch((err) => {
                console.log("erroGet ", err)
            })

    }, [url])

    return (data)
}

export default useRequestData