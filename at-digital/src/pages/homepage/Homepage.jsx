import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './homepage.css';

function Homepage() {
  return (
    <div>
      <Navbar/>
      <div className='poster'>
        <img className='posterimg' src="./img/andy-kelly-0E_vhMVqL9g-unsplash 1.png" alt="" />
        <div className='radiant-poster'>
        <h1 className='radiant-posterQuote'>
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <button className='posterbutton'>Get free consultation</button>
        </div>
      </div>
      <Footer/>

    </div>

  )
}

export default Homepage