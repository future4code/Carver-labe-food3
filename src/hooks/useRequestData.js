import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkN1QVc2SjQ1bjhpYW9ESVJXT202IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExNTE1MTE1NTE1MTUxNSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiIxLCAyLCAzIC0gNCIsImlhdCI6MTY0MTk5Mjc0OH0.0U_neSAexMoUon4XY0BQidKjHRyM7eSVJW-ifNPFB5o"
                // localStorage.getItem('token')    
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