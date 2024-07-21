import React from 'react'
import './css/Cart.css'
import Men_Products_Data from "../Men_Products_Data";

function Cart() {
    const [firstProduct] = Men_Products_Data;
  return (
    <div>
        <div className='cart-upper-line'></div>
        <div className='cart-main'>
            <div className='cart-products-section'>
                <div className='cart-products-img'><img src={firstProduct.imageLink1} alt="" /></div>
                <div className='cart-products-details'>
                    <h3>Name</h3>
                    <div className='cart-products-size'>Size</div>
                    <div className='cart-products-price'>258</div>
                    <div className='cart-quanty-section'>
                        <button>-</button>
                        <div>number</div>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className='cart-payment-section'></div>
        </div>
    </div>
  )
}

export default Cart