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
import HouseAminities from './components/landlord/HouseAminities.jsx'
import HouseBathrooms from './components/landlord/House-Bathrooms.jsx'
import HouseDescription from './components/landlord/House-Description.jsx'
import HouseTitle from './components/landlord/House-title.jsx'
import HouseLocation from './components/landlord/House-Location.jsx'
import HousePrice from './components/landlord/House-Price.jsx'
import HouseDetails from './components/tenent/HouseDetails.jsx'
import HouseDetailsDesign from './components/tenent/HouseDetailsDesign.jsx'
import searchHouse from './components/tenent/searchHouse.jsx'
import NotFound from './components/notFound.jsx'
import PublishHouse from './components/landlord/publishHouse.jsx'
import Housedis from './components/landlord/house-dis.jsx'

const App = () => {
  return <>
      
    <Router>
      <Navbar/>
      <div className="container mx-auto mt-8">
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/' element={<Hero/>} />
        <Route path='/tenent/getHouse' element={<HouseDetails/>} />
        <Route path='/tenent/displayHouse/:id' element={<HouseDetailsDesign/>} />
        <Route path='/landlord/Host' element={<Host/>} />
        <Route path='/landlord/getHouse' element={<HostedHouse/>} />
        <Route path='/landlord/Aminities' element={<HouseAminities/>} />
        <Route path='/landlord/Bathrooms' element={<HouseBathrooms/>} />
        <Route path='/landlord/Description' element={<HouseDescription/>} />
        <Route path='/landlord/HouseTitle' element={<HouseTitle/>} />
        <Route path='/landlord/HouseLocation' element={<HouseLocation/>} />
        <Route path='/landlord/HousePrice' element={<HousePrice/>} />
        <Route path='/landlord/PublishHouse' element={<PublishHouse/>} />
        <Route path='/landlord/Housedis' element={<Housedis/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
      <Toaster/>
      <Footer/>
    </Router>

    </>
  
}

export default App
