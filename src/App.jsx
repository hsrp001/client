import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing_page from './pages/Landing_page'
import { Route, Routes } from 'react-router-dom'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CartContext } from './context/Cardcontext'
import Payment from './pages/Payment'

function App() {

  const  {isCartOpen}  =  useContext(CartContext)
  console.log(isCartOpen);
  return (
    <div className=''>
      <Header></Header>
      {
        isCartOpen && <Cart></Cart>
      }
      <Routes>
      <Route path='/' element={ <Landing_page></Landing_page>}></Route>
      <Route path='/Mens' element={<Mens></Mens>}></Route>
      <Route path='/Womens' element={<Womens></Womens>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>

     
        
      </Routes>
   
      <Footer></Footer>
      
      </div>
  )
}

export default App