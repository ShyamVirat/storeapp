// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { addToCart } from '../redux/actions';
import axios from 'axios'; // Import axios for making API requests
import '../components/ProductList.scss';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from the FakeStoreAPI
        const response = await axios.get('https://fakestoreapi.com/products');
         const fetchedProducts = response.data;
        console.log(response.data);
        // Dispatch action to update Redux store with fetched products
        dispatch({ type: 'UPDATE_PRODUCTS', payload: fetchedProducts });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Navigate to the cart page after adding to the cart
    navigate('/Cart');
  };

  return (
    
      <div className="product-list">
        
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img
            src={product.image} // Assuming 'image' is the property in your product object that contains the image URL
            alt={product.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}

      </div>
   
  );
};

export default ProductList;
