import React, {createContext, useState} from 'react'
import ReactDOM from "react-dom/client"
import App from './app.jsx'



export const context=createContext({isAuthorised:false})

const Appwrapper=()=>{
    const [isAuthorised,setIsauthorised]=useState(false);
    const [user,setUser]=useState({})

    return(
       <>
       <context.Provider value={{isAuthorised,setIsauthorised,user,setUser}}>
        <App/>
       </context.Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
     <Appwrapper/>
    </React.StrictMode>
)

