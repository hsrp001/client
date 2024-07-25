import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from '../icons/logo.png'; 
import carts from '../icons/cart.svg';
import { CartContext } from '../context/Cardcontext';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const  {setIsCartOpen ,cart }  =  useContext(CartContext)
  return (
    <header className="header fixed top-0 left-0 right-0 max-h-28  z-10  bg-white  shadow-sm">
      <div className="upper-line"></div>
      <div className="main flex items-center justify-between p-4">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        </div>
        <nav className="nav-menu hidden md:flex space-x-4">
          <div className="nav-item"><Link to="/">Home</Link></div>
          <div className="nav-item"><Link to="/Mens">MEN</Link></div>
          <div className="nav-item"><Link to="/Womens">WOMEN</Link></div>
          <div className="nav-item"><Link to="/Contact">CONTACT US</Link></div>
        </nav>
        <div className="icons-container flex items-center space-x-4">
       
          <div className="icon-item  relative" onClick={()=>  setIsCartOpen((prev)=>!prev)}>
            <span className=' absolute right-0 -top-3   text-red-600 bg-white shadow-lg'>{cart.length}</span>
            <div className='cart-box'  >
              
              <img src={carts} alt="Cart" className="icon" />
            </div>
          </div>
     
          <div onClick={toggleMobileMenu}  className=' block cursor-pointer  md:hidden  text-4xl'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

     </div>
        
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-nav-menu  md:hidden bg-gray-50 text-black shadow-sm p-4">
          <div className="nav-item py-2"><Link to="/" onClick={toggleMobileMenu}>Home</Link></div>
          <div className="nav-item py-2"><Link to="/Mens" onClick={toggleMobileMenu}>MEN</Link></div>
          <div className="nav-item py-2"><Link to="/Womens" onClick={toggleMobileMenu}>WOMEN</Link></div>
          <div className="nav-item py-2"><Link to="/Contact" onClick={toggleMobileMenu}>CONTACT US</Link></div>
        </nav>
      )}
    </header>
  );
}

export default Header;
