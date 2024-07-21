import React from 'react'
import './css/Shop_button.css'
import { Link } from "react-router-dom";

function Shop_button({category, link}) {
  return (
    <div className='shop-button'>
        <Link to={link}><button>SHOP FOR {category}</button></Link>
    </div>
  )
}

export default Shop_button