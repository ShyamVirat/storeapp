
//   // reducers.js
// const initialState = {
//     products: [], // Add fetched products here
//     cart: [],
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_PRODUCTS':

//         return{...state,};
//       case 'ADD_TO_CART':
//         // Handle adding a product to the cart
//         return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
  
//       case 'REMOVE_FROM_CART':
//         // Handle removing a product from the cart
//         return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
  
//       case 'UPDATE_QUANTITY':
//         // Handle updating the quantity of a product in the cart
//         return {
//           ...state,
//           cart: state.cart.map((item) =>
//             item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
//           ),
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
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
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
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
  