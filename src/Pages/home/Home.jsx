import React from 'react'

import Redirector from './Redirector'
import Coursal from './Coursal'
import "./homeStyles.css"
import TopOffer from './topOffer/TopOffer'
import BankOffer from './BankOffer'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='home'>
            <Redirector />
            <div className='middle-section'>
                <Coursal />
                <div className="icici">
                    <img src="assets/Home/icici.png" alt="Icici offer" />
                </div>
                <TopOffer/>
                <BankOffer/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home