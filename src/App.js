import './App.css';
import Home from './Pages/home/Home';

import { Routes, Route } from 'react-router-dom'
import CatelogHome from './Pages/catalogue/CatelogHome';
import Navigation from './Pages/home/Navigation';
import Footer from './Pages/home/Footer'
import ProductsHome from './Pages/Products/ProductsHome';
import ProductDescHome from './Pages/Products/prodDescription/ProductDescHome';

function App() {



    const products = [
        {
            name: "SAMSUNG Galaxy A73 5G (Awesome Gray, 128 GB)",
            brand: "samsung",
            category: "mobile",
            uid:"p0001",
            pid:"s001",
            tags: [
                "mobile", "smartphone", "phone", "samsung", "samsung mobile"
            ],
            images: {
                main: {
                    link: "assets/Product/samsung/main/sam-g-f13.webp",
                    size: {
                        height: "198px",
                        width: "162px"
                    },
                    size_2: {
                        height: "53px",
                        width: "42px"
                    },
                    size_3: {
                        height: "417px",
                        width: "323px"
                    },

                },
                other: [
                    {
                        link: "assets/Product/samsung/main/sam-g-f13.webp",
                        size_2: {
                            height: "53px",
                            width: "42px"
                        },
                        size_3: {
                            height: "417px",
                            width: "323px"
                        },
                    },
                    {
                        link: "assets/Product/samsung/other/1.webp",
                        size_2: {
                            height: "54px",
                            width: "29px"
                        },
                        size_3: {
                            height: "417px",
                            width: "196px"
                        }
                    },
                    {
                        link: "assets/Product/samsung/other/2.webp",
                        size_2: {
                            height: "54px",
                            width: "29px"
                        },
                        size_3: {
                            height: "417px",
                            width: "196px"
                        }
                    },
                    {
                        link: "assets/Product/samsung/other/3.webp",
                        size_2: {
                            height: "54px",
                            width: "54px"
                        },
                        size_3: {
                            height: "417px",
                        }
                    },
                    {
                        link: "assets/Product/samsung/other/4.webp",
                        size_2: {
                            height: "54px",
                            width: "54px"
                        },
                        size_3: {
                            height: "417px",
                        }
                    },
                    {
                        link: "assets/Product/samsung/other/5.webp",
                        size_2: {
                            height: "54px",
                            width: "25px"
                        },
                        size_3: {
                            height: "417px",
                        }
                    },
                    {
                        link: "assets/Product/samsung/other/6.webp",
                        size_2: {
                            height: "54px",
                            width: "4px"
                        },
                        size_3: {
                            height: "417px",
                        }
                    },
                ],
                logo: "assets/Product/samsung/b-logo/samsung-brand-logo.webp"
            },
            price: "₹41,999",
            MRP: "₹47,490",
            sale_offer: "11% off",
            delevery_type: "Free delivery",
            delevery_fee: "₹50",
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
                link: "assets/Product/samsung/b-logo/samsung-brand-logo.webp",
                size: {
                    height: "15px",
                    width: "60px",
                }
            },
            discription: "Step up to a new realm of smartphones with the Samsung Galaxy A73 which comes loaded with innovative features. This phone boasts lightning-fast 5G connectivity that always keeps you on par with the world. Powered by Snapdragon 778G and featuring virtual RAM expansion technology, this phone elevates your experience of the digital world. Furthermore, this phone sports an elegant FHD+ Super AMOLED 16.95 cm (6.7) Infinity-O display that can rock your world by delivering a brilliant visual experience. With 8 GB of RAM and 128 GB of internal storage that can be expanded up to 1 TB, you can practically store all that you want and still enjoy the flawless operation of this phone. This phone comes with a brilliant camera set-up that comprises a 108 MP Wide-camera, an Ultra-wide sensor, a Depth Camera, and a Macro Camera, thus, delivering impeccable clarity and mesmerising imagery."
            ,
            warrenty: "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box",
            sellerDetail: {
                s_name: "MYTHANGLORYRetail",
                s_rating: 4.9
            }
        }
    ]
    return (
        <main className='app'>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/categories' element={<CatelogHome />} />
                <Route exact path='/products' element={<ProductsHome products={products} />} />
                <Route exact path='/product-1' element={<ProductDescHome product={products[0]} />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;