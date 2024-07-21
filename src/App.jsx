import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing_page from './pages/Landing_page'
import { Route, Routes } from 'react-router-dom'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
      <Route path='/' element={ <Landing_page></Landing_page>}></Route>
      <Route path='/Mens' element={<Mens></Mens>}></Route>
      <Route path='/Womens' element={<Womens></Womens>}></Route>

        
      </Routes>
   
      <Footer></Footer>
      
      </div>
  )
}

export default App