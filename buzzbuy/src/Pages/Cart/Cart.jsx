
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';

const Cart = () => {
    // Access the cart state from the Cart Context
    const { cart, removeItem } = useContext(CartContext);
      console.log(cart)
    return (
      <div>
        <h2>Cart</h2>
        {cart.map((item) => (
           <div key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };

export default Cart