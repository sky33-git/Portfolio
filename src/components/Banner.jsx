import React from 'react'
import '../assets/styles/Banner.css'
import bannerFirstline from '../assets/images/bannerFirstline.png'
import bannerSecondline from '../assets/images/bannerSecondline.png'
import bannerFooter_img1 from '../assets/images/bannerFooter_img1.png'
import bannerFooter_img2 from '../assets/images/bannerFooter_img2.png'
import bannerFooter_img3 from '../assets/images/bannerFooter_img3.png'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="bannerContainer">
                    <p>   I AM A <span> <img src={bannerFirstline} alt="img1" /> </span> FREELANCE </p>
                    <p> DESIGNER <span> <img src={bannerSecondline} alt="img2" /> </span> FROM </p>
                    <p> SAN FRANCISCO </p>
                </div>

                <div className="bannerFooter">
                    <div className="bannerFooter-logo">
                        <div className="bannerFooter-logo-first">
                            <img src={bannerFooter_img1} alt="doradesign" />
                        </div>

                        <div className="bannerFooter-logo-second">
                            <img src={bannerFooter_img2} alt="wave" />
                        </div>

                        <div className="bannerFooter-logo-third">
                            <img src={bannerFooter_img3} alt="SILSILA" />
                        </div>
                    </div>

                    <div className="bannerFooter-info">
                        <p>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Banner
