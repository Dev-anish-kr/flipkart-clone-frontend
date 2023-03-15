import React from 'react'

const ProductFliter = () => {
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
                    <div className="c-1">
                        <input type="checkbox" name="" id="" />
                        <span>Mobile</span>
                    </div>
                    <div className="c-1">
                        <input type="checkbox" name="" id="" />
                        <span>Accoseries</span>
                    </div>
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
                <div className="c-1">
                    <input type="checkbox" name="" id="" />
                    <span>Samsung</span>
                </div>
                <div className="c-1">
                    <input type="checkbox" name="" id="" />
                    <span>Apple</span>
                </div>
                <div className="c-1">
                    <input type="checkbox" name="" id="" />
                    <span>Realme</span>
                </div>
            </div>
            <hr />
            <div className="other">

            </div>

        </div>
    )
}

export default ProductFliter