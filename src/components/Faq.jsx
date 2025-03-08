import React from 'react'
import '../assets/styles/Faq.css'
import star from '../assets/images/star.png'


const Faq = () => {
    return (
        <>
            <div className="faq">
                <div className="faqContainer">

                    <div className="faqHeader">
                        <h1> <img src={star} alt="*" /> Frequently asked questions</h1>
                    </div>

                    <div className="faqBody">
                        <h2>What is your design process?</h2>
                        <p>My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.</p>
                    </div>

                    <div>
                        <h2> What tools and software do you use for UX design? </h2>
                    </div>

                    <div>
                        <h2>How do you measure the success of your UX designs? </h2>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Faq
