import React, { createContext, useState } from 'react';

// Create the cart context
const CartContext = createContext(null);

// Cart provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log(cart);

  const addToCart = (item) => {
    const data = cart.find((cartdata)=>  cartdata  === item)
    
    if(!data)
    {

      setCart((prevCart) => [...prevCart, item]);
    }
  
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart , setIsCartOpen , isCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
