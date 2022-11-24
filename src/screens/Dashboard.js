import React from 'react'
import Customer from './Customer'
import Features from './Features'
import Global from './Global'
import Main from './Main'
import Navbar from './Navbar'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Dashboard() {
  return (
    <>
        <Navbar/>
        <Main/>
        <Features/>
        <Global/>
        <Customer/>
        <Subscribe/>
        <Footer/>
        
    
    </>
  )
}

export default Dashboard