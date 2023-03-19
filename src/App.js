import './App.css';
import Home from './Pages/home/Home';

import { Routes, Route } from 'react-router-dom'
import CatelogHome from './Pages/catalogue/CatelogHome';
import Navigation from './Pages/home/Navigation';
import Footer from './Pages/home/Footer'
import ProductsHome from './Pages/Products/ProductsHome';
import ProductDescHome from './Pages/Products/prodDescription/ProductDescHome';

import products from "./Pages/ProductData/productData"
import CartHome from './Pages/cart/CartHome';
import { useState } from 'react';

function App() {

    const [cartItems, setCartItem] = useState([]);

    const cartItemSetter=(item)=>{
        setCartItem(prev=>{
            return [...prev,item]
        })
    }
    return (
        <main className='app'>
            <Navigation cartValue={cartItems.length} />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/categories' element={<CatelogHome />} />
                <Route exact path='/products' element={<ProductsHome products={products} />} />
                {
                    products?.map((product, idx) => {
                        return <Route key={idx} exact path={`/product${product.category}${product.uid}`} element={<ProductDescHome cartItemSetter={cartItemSetter} product={product} />} />
                    })
                }
                <Route exact path="/cart" element={<CartHome cartItems={cartItems} />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;