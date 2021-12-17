import React from 'react'
import Checkout from '../components/CheckOut/Checkout';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const CheckoutPage = () => {
  return (
    <div>
      <Navbar/>
      <Checkout/>
      <Footer/>
    </div>
  )
}

export default CheckoutPage;
