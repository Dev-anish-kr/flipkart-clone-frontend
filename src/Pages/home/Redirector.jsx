import React from 'react'
import "./homeStyles.css"
import { useNavigate } from 'react-router-dom';

const Redirector = () => {
  const navigate=useNavigate();
  return (
    <div className='redirector'>
      <div onClick={()=>{
        navigate("/categories")
      }} className="red-comp">
        <img src="assets/Home/offer.webp" alt="offer img" />
        <p>Top Offers</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/mobile.webp" alt="mobile img" />
        <p>Mobile & Tablets</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/electronics.webp" alt="electronics img" />
        <p>Electronics</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/tv.webp" alt="TV & Appliance img" />
        <p>TV & Appliance</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/fashion.webp" alt="Fashion img" />
        <p>Fashion</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/beauty.webp" alt="Beauty img" />
        <p>Beauty</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/furniture.webp" alt="Home & Furniture img" />
        <p>Home & Furniture</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/flight.webp" alt="Flights img" />
        <p>Flights</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/grocery.webp" alt="Grocery img" />
        <p>Grocery</p>
      </div>
    </div>
  )
}

export default Redirector