

// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import '../components/Cart.scss'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemoveFromCart = (itemId) => {
    const confirmed = window.confirm('Are you sure you want to remove this item from the cart?')
    if (confirmed) {
      dispatch(removeFromCart(itemId));
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <>
          <div class="emptycart">
            <h1>Hey, it feels so light</h1>
            <div class="emptyicon">
              <svg fill="#000000" width="200px" height="200px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M840 651q-6-20-16-43-7-14-21-40.5T783 527q-10-22-15-41-12-40-6-96 4-52 20-95 4-12 23-35 17-22 22-33 9-18 3-34-8-22-39-35-19-8-58-16l-21-5-47-11q-53-13-80-21-43-13-76-30-4-3-18-13-23-18-35-24-20-11-31-5-19 11-21 70-2 35 2 75 8 83 36 131-99 29-173 106T167 592q-16 56-17 105 0 64 28 101 19 26 57 52 22 15 69 40l14 7q87 48 159 62 84 17 171-6 63-18 114-64t72-107q23-66 6-131zm-487 53q-19 0-27-24-7-22-2-53.5t19-52.5q17-23 40-22 26 2 34 26 8 21-.5 51.5T390 682t-37 22zm360-229q-8 21-35 44-16 13-48 35l-8 6q-27 19-47.5 21.5T523 573q-29-10-85-36l-28-12-23-10q-31-12-45-19-24-12-34-25-21-30 5-57 16-16 58-38l13-6q38-21 61-27 31-7 67 2 71 19 128 46 89 43 73 84z" /></svg>
              <p>Your cart is empty. Add some products!</p>
            </div>

          </div>
        </>


      ) :
        (
          <><div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div class="imagetitle">

                  <h2>{item.title}</h2>

                  <div class="item-description">
                    <p>{item.description}</p>
                  </div>

                  <img
                    src={item.image} // Assuming 'image' is the property in your product object that contains the image URL
                    alt={item.title}
                    style={{ maxWidth: '25%', height: '25%' }} />
                </div>


                <div class="qtyinput">
                  <p>Qty:<input
                    type="number"
                    value={item.quantity}
                    inputMode="numeric"
                    step="any"
                    autoFocus={false}
                    min="1"
                    max="10"
                    //value should not be less than Zero
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (e.target.value === '' || (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10)) {
                        dispatch(updateQuantity(item.id, e.target.value === '' ? '' : newQuantity));
                      }
                      else {

                        alert('Quantity must be between 1 and 10.');

                      }
                      if ((e.target.value === '')) {
                        handleRemoveFromCart(item.id)
                      }

                    }}
                  />
                    <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                  </p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M41,43a2,2,0,0,1-1.41-.59L5.62,8.44A2,2,0,0,1,8.44,5.62L42.38,39.56A2,2,0,0,1,41,43Z" fill="#ea802a" /><path d="M7,43a2,2,0,0,1-1.41-3.41L39.56,5.62a2,2,0,0,1,2.83,2.83L8.44,42.38A2,2,0,0,1,7,43Z" fill="#ea802a" /></svg>
                </button>
              </div>
            ))}
          </div><div className="cart-summary">
              <h3>Total Amount: ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</h3>
            </div></>

        )}
    </div>
  );
};

export default Cart;
