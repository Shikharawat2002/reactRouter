import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
//create an outlet this outlate take this file as a base file, changes occure where we add outlet
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
   <>
   <Header/>
   {/* here we can change the components dynamically */}
    <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout