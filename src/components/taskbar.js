// Taskbar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProducts } from '../redux/actions';
import axios from 'axios'; // Import axios for making API requests
import './taskbar.scss'
import { useLocation} from 'react-router-dom';

const Taskbar = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    // const categories = useSelector((state) => state.categories);

    const handleCategoryClick = async (category) => {
        try {
            let response;
            if (category.toLowerCase() === 'home') {
                response = await axios.get(`https://fakestoreapi.com/products`)
            } else {
                response = await axios.get(
                    `https://fakestoreapi.com/products/category/${category}`
                );

            }
            const products = response.data;
            dispatch(updateProducts(products));
            setShowMenu(false);

        } catch (error) {
            console.error('Error fetching products by category:', error);
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    if (location.pathname === '/cart') {
        return null;
      }

    return (
        <div className="taskbar">
            <div className="category-list">
                <div className="menu-button" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>

                <div className={`menu-list ${showMenu ? 'show' : ''}`}>
                    <div className="allProducts" onClick={() => handleCategoryClick('home')}> Home</div>
                    <div className="category" onClick={() => handleCategoryClick("men's clothing")}>
                        Men's Clothing
                    </div>
                    <div className="category" onClick={() => handleCategoryClick("women's clothing")}>
                        Women's Clothing
                    </div>

                    <div className="category" onClick={() => handleCategoryClick('electronics')}>
                        Electronics
                    </div>
                    <div className="category" onClick={() => handleCategoryClick('jewelery')}>
                        Jewelry
                    </div>

                    {/* Add more categories as needed */}
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
