import React, { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin= {setShowLogin}/>
       
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/order' element={<PlaceOrder/>} ></Route>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App