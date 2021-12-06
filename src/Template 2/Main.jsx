import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Events from './Events'
import Video from './Video'
import Hotel from './Hotel'
import Blessings from './Blessings'
import Gallery from './Gallery'
import Footer from './Footer'
export default function Main() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Events/>
            <Video/>
            <Hotel/>
            <Blessings/>
            <Gallery/>
            <Footer/>
            <footer className="sticky-footer">
                <button className="order">Order Now</button>
            </footer>
        </>
    )
}
