import React, {useState} from "react";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props){
    const [signup, setSignUp] = useState('token')

return (
    <GlobalContext.Provider value={[signup, setSignUp]}>
        {props.children}
    </GlobalContext.Provider>
)
};