
  // reducers.js
const initialState = {
    products: [],
    cart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCTS':
        return { ...state, products: action.payload };
      case 'ADD_TO_CART':
        // Check if the product is already in the cart
        const existingItem = state.cart.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }
      case 'REMOVE_FROM_CART':

        return { ...state, 
          
          cart: state.cart.filter(item => item.id !== action.payload) };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  