import React from 'react'
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar'

const Home = (props) => {
  return (
    <>
      <Navbar {...props}/>
      <Banner/>
    </>
  )
}

export default Home;
