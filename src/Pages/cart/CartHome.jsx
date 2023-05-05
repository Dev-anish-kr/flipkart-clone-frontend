import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartCard from './CartCard'
import "./cartStyle.css"
import { useSelector } from 'react-redux'
import { getUserInfo } from '../../features/userInfoFetch/userInfoSlice'
const CartHome = () => {
    const userInfo = useSelector(getUserInfo);
    const Navigate = useNavigate();
    if (!userInfo?.username) {
        return <p>Please login...</p>
    }
    const cartItems = userInfo?.cartItems
    let totalPrice = 0
    var counts = {};
    for (var i = 0; i < cartItems.length; i++) {
        totalPrice+=cartItems[i]?.price_value
        counts[cartItems[i]?.uid] = 1 + (counts[cartItems[i].uid] || 0);
    }

    const cartItemsContent=(
        <>
            {
                Object.entries(counts).map(([key,value])=>{
                    return <CartCard key={key} uid={key} count={value}  />
                })
            }
        </>
    )

    return (
        <div className='cart-home-outer'>
            <div className="cart-home">
                {
                    cartItems?.length !== 0 ? (
                        <div className="cart-home-left">
                            {/* {cartItems?.map((citem, idx) => {
                                totalPrice += citem.price_value;
                                return <CartCard key={idx}  />
                            })} */}
                            {cartItemsContent}

                            
                            <div className="place-order">
                                <button onClick={() => Navigate("/checkout")}>PLACE ORDER</button>
                            </div>
                        </div>
                    ) : <h1>Your Cart Is Empty</h1>
                }
                <div className="cart-home-right">
                    <div className="price-det">
                        <p>PRICE DETAIL</p>
                    </div>
                    <div className="pd-bot">
                        <div className="pdb-tot-itm">
                            <p>Price ({cartItems.length + " "} Items)</p>
                            <p>₹{new Intl.NumberFormat().format(totalPrice)}</p>
                        </div>
                        <div className="pdb-del-charg">
                            <p className='left'>Delivery Charges</p>
                            <p className='right'>Free</p>
                        </div>
                        <hr />
                        <div className="total-amt">
                            <p>Total Amount</p>
                            <p>₹{new Intl.NumberFormat().format(totalPrice)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartHome