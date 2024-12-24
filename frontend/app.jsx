import React from 'react'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from "./components/login.jsx"
import Registration from './components/registration.jsx'
import Hero from "./components/Home/hero.jsx"
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Host from './components/landlord/Host.jsx'
import HostedHouse from './components/landlord/HostedHouse.jsx'
import {HouseAminities} from './components/landlord/HouseAminities.jsx'
import HouseBathrooms from './components/landlord/House-Bathrooms.jsx'
import HouseDescription from './components/landlord/House-Description.jsx'
import HouseFloorplan from './components/landlord/House-Floor-plan.jsx'
import HouseLocation from './components/landlord/House-Location.jsx'
import HouseStructure from './components/landlord/House-Structure.jsx'
import Card from "./components/Home/card.jsx"
import HouseDetails from './components/tenent/HouseDetails.jsx'
import HouseDetailsDesign from './components/tenent/HouseDetailsDesign.jsx'
import searchHouse from './components/tenent/searchHouse.jsx'
import NotFound from './components/notFound.jsx'

const App = () => {
  return <>
      
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/' element={<Hero/>} />
        <Route path='/tenent/getHouse' element={<HouseDetails/>} />
        <Route path='/tenent/displayHouse' element={<HouseDetailsDesign/>} />
        <Route path='/tenent/HouseCard' element={<Card/>} />
        <Route path='/landlord/Host' element={<Host/>} />
        <Route path='/landlord/addHouse' element={<Hero/>} />
        <Route path='/landlord/getHouse' element={<HostedHouse/>} />
        <Route path='/landlord/Aminities' element={<HouseAminities/>} />
        <Route path='/landlord/Bathrooms' element={<HouseBathrooms/>} />
        <Route path='/landlord/Description' element={<HouseDescription/>} />
        <Route path='/landlord/FloorPlan' element={<HouseFloorplan/>} />
        <Route path='/landlord/HouseLocation' element={<HouseLocation/>} />
        <Route path='/landlord/Structure' element={<HouseStructure/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Toaster/>
      <Footer/>
    </Router>

    </>
  
}

export default App
