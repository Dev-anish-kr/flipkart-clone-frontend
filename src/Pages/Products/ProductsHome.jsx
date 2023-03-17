import React from 'react'
import "./ProductStyles.css"
import ProductCard from './ProductCard'
import ProductFliter from './ProductFilter.jsx/ProductFliter'



const ProductsHome = ({products}) => {

    

    return (
        <div>
            <div className='product-home-main'>
                <select className='selection' name="" id="">
                    <option value="">Sort By</option>
                    <option value="">Price Low to High</option>
                    <option value="">Popularity</option>
                    <option value="">Price High to Low</option>
                    <option value="">Newest First</option>
                </select>
            </div>
            <div className="product-home">
                <div className="filter-page">
                    <ProductFliter />
                </div>
                <div className="products-list">
                    <ProductCard product={products[0]} />
                    <ProductCard product={products[0]} />
                    <ProductCard product={products[0]} />
                    <ProductCard product={products[0]} />
                    <ProductCard product={products[0]} />
                </div>
            </div>
        </div>
    )
}

export default ProductsHome