import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import WebDevelopment from '../Pages/WebDevelopment'
import AppDevelopment from '../Pages/AppDevelopment'
import DigitalMarketing from '../Pages/DigitalMarketing'
import UiDesign from '../Pages/UiDesign'
import Contact from '../Pages/Contact'
import PortfolioPage from '../Pages/Portfolio'
import Learn from '../Pages/Learn'

function AllRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/web-development" element={<WebDevelopment/>} />
            <Route path="/app-development" element={<AppDevelopment/>} />
            <Route path="/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/ui-ux-design" element={<UiDesign/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/portfolio" element={<PortfolioPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoute