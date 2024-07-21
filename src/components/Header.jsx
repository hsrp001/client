import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from '../icons/logo.png'; 
import cart from '../icons/cart.svg';
import signIn from '../icons/human.svg';
import options from '../icons/options.svg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
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
          <div className="icon-item">
            <div className='cart-box'>
              <img src={cart} alt="Cart" className="icon" />
            </div>
          </div>
          <div className="icon-item">
            <button className="sign-in-button flex items-center">
              <img src={signIn} alt="Sign In" className="icon mr-1" /> Sign In
            </button>
          </div>
        </div>
        <div className='Header-options '>
          <button onClick={toggleMobileMenu}  className=' bg-slate-700  text-4xl'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mobile-nav-menu md:hidden bg-gray-800 text-white p-4">
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
