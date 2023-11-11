// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import '../components/Cart.scss'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.quantity * item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity(item.id, e.target.value))}
            />
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Amount: ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}</h3>
      </div>
    </div>
  );
};

export default Cart;
