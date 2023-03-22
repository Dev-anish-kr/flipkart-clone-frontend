import React from 'react'

import "./ProductStyles.css"
import ProductCard from './ProductCard'
import ProductFliter from './ProductFilter.jsx/ProductFliter'




const ProductsHome = ({ products }) => {

    const handleFilterSet = (filterValues) => {
        console.log(filterValues);
    }

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    const productFilters = {
        categories: removeDuplicates(products.map(item => {
            return item.category;
        })),
        brands: removeDuplicates(products.map(item => {
            return item.brand;
        }))
    }

    console.log(productFilters);


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
                    <ProductFliter handleFilterSet={handleFilterSet} productFilters={productFilters} />
                </div>
                <div className="products-list">
                    {products?.map((product, idx) => {
                        return <ProductCard key={idx} product={product} />

                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsHome