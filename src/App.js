import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './container/home/home'
import Hero from './container/Hero'
import Navbar from './container/Navbar'

import NotFound from './container/notFound'
import Layout from './hoc/layout'
import NavbarMobile from './container/NavbarMobile'
import './App.css'


const App = () => {
  return (
    <div className='app__container'>
      <NavbarMobile />
      <Navbar />
      <Hero />

    </div>

    // <Layout>


    //   <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path="*" element={<NotFound />} />
    //     {/* <Route exact path="/home" element={} /> */}
    //   </Routes>
    // </Layout>
  )
}

export default App