import React from 'react'
import Nav from '../components/navbar.jsx'
import Homecont1 from './Homecont/homecont1.jsx'
import About from './Homecont/About.jsx'
import ContactUs from './Homecont/contact.jsx'
import Footer from './Homecont/Footer.jsx'



const home = () => {
  return (
    <>
        <Nav />
        <Homecont1 />
        <About/>
        <ContactUs />
        <Footer />
       
    </>
  )
}

export default home