import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Item = (props) => {
  const cart = useContext(CartContext)

  console.log('cart',cart)
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Price: ${props.price}</h3>
      <button 
        onClick={() => 
          cart.setItems([
            ...cart.items, {name: props.name, price: props.price}
          ])}
      >
        Add to Cart
      </button>
    </div>
  );
}
export default Item;