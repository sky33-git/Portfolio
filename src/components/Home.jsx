import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Expertise from './Expertise'
import Works from './Works'
import Experience from './Experience'
import Blogs from './Blogs'
import Feedback from './Feedback'
import Faq from './Faq'
import Footer from './Footer'
import '../assets/styles/Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Expertise />
            <Works />
            <Experience />
            <Blogs />
            <Feedback />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
