// import React, {createContext, useState} from 'react'
// import ReactDOM from "react-dom/client"
// import App from './app.jsx'



// export const context=createContext({isAuthorised:false})

// const Appwrapper=()=>{
//     const [isAuthorised,setIsauthorised]=useState(false);
//     const [user,setUser]=useState({})

//     return(
//        <>
//        <context.Provider value={{isAuthorised,setIsauthorised,user,setUser}}>
//         <App/>
//        </context.Provider>
//        </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//      <Appwrapper/>
//     </React.StrictMode>
// )

import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

// Create the context
export const context = createContext({
  isAuthorised: false,
  user: {},
  hostDetails: {
    houseType: '',
    location: '',
    bedrooms: 0,
    beds: 0,
    bathrooms: [],
    amenities: [],
    description: '',
    title: '',
    price: 0,
  }, // Set initial values for host details
});

const Appwrapper = () => {
  const [isAuthorised, setIsauthorised] = useState(false);
  const [user, setUser] = useState({});
  const [hostDetails, setHostDetails] = useState({
    houseType: '',
    location: '',
    bedrooms: 0,
    beds: 0,
    bathrooms: [],
    amenities: [],
    description: '',
    title: '',
    price: 0,
    images: { coverImage: '', otherImages: [] },
    
  });

  return (
    <context.Provider
      value={{
        isAuthorised,
        setIsauthorised,
        user,
        setUser,
        hostDetails,
        setHostDetails, // Add setter for hostDetails
      }}
    >
      <App/>
    </context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>
);
