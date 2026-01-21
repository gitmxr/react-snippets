import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const cart = useContext(CartContext)
  const total = cart.items.reduce((acc, item) =>acc + item.price , 0);

  return (
    <div className="card">
       <h2>Shopping Cart</h2>
       {
        cart &&
        cart.items.map((item,index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        )
       )}
        <h4>Total: ${total}</h4>
    </div>
    ); 
}

export default Cart;