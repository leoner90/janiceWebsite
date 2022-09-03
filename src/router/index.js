import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Fees from '../views/Fees.jsx'
import Gallery from '../views/Gallery.jsx'
import Contacts from '../views/Contacts.jsx'
 
const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/fees`} element={<Fees />} />
        <Route path={`${process.env.PUBLIC_URL}/gallery`} element={<Gallery />} />
        <Route path={`${process.env.PUBLIC_URL}/contacts`} element={<Contacts />} />
    </Routes>
)

export  {Router };