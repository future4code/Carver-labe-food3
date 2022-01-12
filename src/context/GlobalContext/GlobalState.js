import React, {useState} from "react";
import { GlobalContext } from "./GobalStateContext"

export default function GlobalState(props){
    const [cart, setCart] = useState([])

return (
    <GlobalContext.Provider value={[cart, setCart]}>
        {props.children}
    </GlobalContext.Provider>
)
}
