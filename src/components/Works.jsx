import React from 'react'
import '../assets/styles/Works.css'
import works_header from '../assets/images/works_header.png'
import works_img1  from '../assets/images/works_img1.png'
import works_img2  from '../assets/images/works_img2.png'
import works_img3  from '../assets/images/works_img3.png'

const Works = () => {
    return (
        <>
            <div className="Works">
                <div className="workContainer">
                    
                    <div className="workCardsHeader">
                        <div className="cardH1">
                            <h1><img src={works_header} alt="WORKS!" /></h1>
                        </div>

                        <div className="cardP">
                            <p>view all</p>
                        </div>
                    </div>

                    <div className="workCards">
                        <div className="workCard-container">

                            <div className="workCard-img">
                            <img src={works_img1} alt="Analysis Application" />
                            </div>

                        <div className="workCard-info">
                            <div className='info-topDiv'>

                                <h1>Analysis Application</h1>
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>

                                <button>FIGMA</button>
                                <button>UX</button>
                                </div>

                                <div className='info-bottomDiv'>
                                    <button>View Case Study</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="workCards">
                        <div className="workCard-container">

                            <div className="workCard-img">
                            <img src={works_img2} alt="FortKnox Application" />
                            </div>

                            <div className="workCard-info">

                                <div className='info-topDiv'>
                                <h1>Fortknox Application</h1>
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>

                                <button>MOBILE</button>
                                <button>WEB</button>
                                </div>

                                <div className='info-bottomDiv'>
                                    <button>View Case Study</button>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="workCards">
                        <div className="workCard-container">

                            <div className="workCard-img">
                            <img src={works_img3} alt="Zenocide Application" />
                            </div>

                            <div className="workCard-info">

                                <div className='info-topDiv'>
                                <h1>Zenocide Application</h1>
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>

                                <button>APP</button>
                                <button>WEB</button>
                                </div>

                                <div className='info-bottomDiv'>
                                    <button>View Case Study</button>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Works
