import React from 'react'
import '../assets/styles/Feedback.css'
import star from '../assets/images/star.png'
import feedback_img1 from '../assets/images/feedback_img1.png'
import feedback_img2 from '../assets/images/feedback_img2.png'

const Feedback = () => {
    return (
        <>
            <div className="feedback">
                <div className="feedbackContainer">

                    <div className="feedback-header">
                        <img src={star} alt="" />
                        <h1>What they say</h1>
                    </div>

                    <div className="feedback-body">

                        <div className="feedbackBody-leftDiv">

                            <img src={feedback_img1} alt="*" />
                            <div>
                                <h3>Floyd Miles</h3>
                                <p style={{ color: "gray" }}>eBay</p>
                            </div>
                        </div>

                        <div className="feedbackContainer-rightDiv">

                            <div className='rightDiv-img' >
                                <img src={feedback_img2} alt="" />
                            </div>

                            <div>
                                <h4>
                                  Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
                                </h4>
                            </div>
                        </div>

                    </div>

                    <div className="feedback-footer">
                        <button>🡨</button>
                        <button>🡪</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Feedback
