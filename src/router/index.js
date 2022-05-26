import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Fees from '../views/Fees.jsx'
import Gallery from '../views/Gallery.jsx'
import Contacts from '../views/Contacts.jsx'

const Router = () => (
    <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/fees'} element={<Fees />} />
        <Route path={'/gallery'} element={<Gallery />} />
        <Route path={'/contacts'} element={<Contacts />} />
    </Routes>
  )
  
  export default Router