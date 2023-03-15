import React from 'react'
import "./ProductStyles.css"
import ProductCard from './ProductCard'
import ProductFliter from './ProductFilter.jsx/ProductFliter'



const ProductsHome = () => {

    const products = [
        {
            name: "SAMSUNG Galaxy A73 5G (Awesome Gray, 128 GB)",
            brand: "samsung",
            tags: [
                "mobile", "smartphone", "phone", "samsung", "samsung mobile"
            ],
            images: {
                main: {
                    link: "assets/Product/samsung/main/sam-g-f13.webp",
                    size: {
                        height: "198px",
                        width: "162px"
                    }
                },
                other: [
                    "assets/Product/samsung/other/1.webp",
                    "assets/Product/samsung/other/2.webp",
                    "assets/Product/samsung/other/3.webp",
                    "assets/Product/samsung/other/4.webp",
                    "assets/Product/samsung/other/5.webp",
                ],
                logo: "assets/Product/samsung/b-logo/samsung-brand-logo.webp"
            },
            price: "₹41,999",
            MRP: "₹47,490",
            sale_offer: "11% off",
            delevery_type: "Free delivery",
            details: [
                "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                "17.02 cm (6.7 inch) Full HD+ Display",
                "108MP + 12MP + 5MP + 5MP | 32MP Front Camera",
                "5000 mAh Li-ion Battery",
                "Qualcomm Snapdragon 778G Processor",
                "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box"
            ],
            specifications: [
                {
                    sp_name: "In The Box",
                    sp_value: "Handset, Cable, Sim Ejection Pin, User Manual"
                },
                {
                    sp_name: "Model Number",
                    sp_value: "SM-A736BZAGINU|SM-A736BZAGINS"
                },
                {
                    sp_name: "Model Name",
                    sp_value: "Galaxy A73 5G"
                },
                {
                    sp_name: "Color",
                    sp_value: "Awesome Gray"
                },
                {
                    sp_name: "Display Size",
                    sp_value: "17.02 cm (6.7 inch)"
                },
                {
                    sp_name: "Resolution",
                    sp_value: "2400 x 1080 Pixels"
                },
                {
                    sp_name: "Operating System",
                    sp_value: "Android 12"
                },
            ],
            rating: 4.2,
            ratingCount: 445,
            reviewCount: 190,
            availibleOffer: [
                {
                    offerType: "Bank Offer",
                    offerDesc: "10% off on Samsung axis Bank credit cardT&C"
                },
                {
                    offerType: "Bank Offer",
                    offerDesc: "5% Cashback on Flipkart Axis Bank CardT&C"
                },
                {
                    offerType: "Bank Offer",
                    offerDesc: "₹2000 off on HDFC Bank Credit,Credit and Debit Card EMI TransactionsT&C"
                },
                {
                    offerType: "Special Price",
                    offerDesc: "Get extra ₹5491 off (price inclusive of cashback/coupon)T&C"
                },
                {
                    offerType: "",
                    offerDesc: "Buy this Product and Get Extra ₹500 Off on Bikes & Scooters"
                },
                {
                    offerType: "Partner Offer",
                    offerDesc: "Shop With Flipkart Pay Later & stand a chance to win ₹500 Gift Card* during the offer period"
                },
            ],
            brandLogo: {
                link: "",
                size: {
                    height: "28px",
                    width: "74"
                }
            },
            warrenty: "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box",
            sellerDetail: {
                s_name: "MYTHANGLORYRetail",
                s_rating: 4.9
            }
        }
    ]

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