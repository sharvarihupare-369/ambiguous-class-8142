

import React from 'react'
import { createContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
   
    const [cart, setCart] = useState([]);
  
   
    const addItem = (item) => {
      setCart([...cart, item]);
    };
  
    const removeItem = (id) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    };
    const contextValue = {
      cart,
      addItem,
      removeItem,
    };
  
    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
  };

export default CartProvider