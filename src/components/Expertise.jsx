import React from 'react'
import '../assets/styles/Expertise.css'
import expertise_star from '../assets/images/expertise_star.png'

const Expertise = () => {
    return (
        <>
            <div className="expertise">
                <div className="expertiseContainer">

                    <h1> <img src={expertise_star} alt="*" /> Expertise</h1>

                    <div className="expertiseInfo">
                        <div className="expertiseCards">

                            <li>Branding</li>
                            <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                        </div>

                        <div className="expertiseCards">

                            <li>UI Design</li>
                            <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                        </div>

                        <div className="expertiseCards">

                            <li>UI Design</li>
                            <p>I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements</p>
                        </div>

                        <div className="expertiseCards">
                            <li>UI Development</li>
                            <p>I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Expertise
