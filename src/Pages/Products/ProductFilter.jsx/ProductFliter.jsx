import React from 'react'

const ProductFliter = ({ productFilters }) => {
    return (
        <div className='product-filter'>
            <div className="filter-header">
                <p>Filters</p>
                <button className='button'>Apply</button>
            </div>
            <hr />
            <div>
                <div className="f-inner-header">
                    <p>CATEGORIES</p>
                </div>
                <div className="category">
                    {
                        productFilters.categories?.map((category, idx) => {
                            return (
                                <div key={idx} className="c-1">
                                    <input type="checkbox" name="category" id="" />
                                    <span>{category}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr />
            <div>
                <div className="f-inner-header">
                    <p>PRICE</p>
                </div>
                <div className="price-range">
                    <input type="text" />
                    -
                    <input type="text" />
                </div>
            </div>
            <hr />
            <div className="brand">
                <p>Brands</p>
                {
                    productFilters?.brands?.map((brand, idx) => {
                        return (
                            <div key={idx} className="c-1">
                                <input type="checkbox" value={brand} name={brand} id="" />
                                <span>{brand}</span>
                            </div>
                        )
                    })
                }

            </div>
            <hr />
            <div className="other">

            </div>

        </div>
    )
}

export default ProductFliter