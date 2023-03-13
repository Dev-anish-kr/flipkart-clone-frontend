import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./homeStyles.css"

const Navigation = () => {
    return (
        <div className="navigation-brand">
            <img className='brand-img' src="assets/Home/Brand.png" alt="Brand img" />
            <div className='navigation'>
                    <div className="search-bar">

                    <input type="text" placeholder='Search for products, brands and more' />
                    <SearchIcon/>

                    </div>

                    <button>Login</button>

                    <span>Become a Seller</span>

                    <span>More</span>

                    <span className='cart'> <ShoppingCartIcon/>Cart</span>


            </div>
        </div>
    )
}

export default Navigation