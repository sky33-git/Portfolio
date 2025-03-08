import React from 'react'
import '../assets/styles/Experience.css'
import star from '../assets/images/star.png'

const Experience = () => {
    return (
        <>
            <div className="experienceContainer">
                <div className="experienceCard">

                    <div className="card-header">
                        <img src={star} alt="*" /> <h1>Experience</h1>
                    </div>

                    <div className="cardDiv">
                        <div className="card-role">
                            <h2>Lead Product Designer</h2>
                        </div>

                        <div className="card-roleInfo">
                            <h3> Fortknox </h3>
                            <p> Mar 2022 - Oct 2023 </p>

                        </div>
                    </div>

                    <div className="cardDiv">
                        <div className="card-role">
                            <h2>Intern Designer</h2>
                        </div>

                        <div className="card-roleInfo">
                            <h3> OmniSafe </h3>
                            <p> Mar 2022 - Oct 2023 </p>

                        </div>
                    </div>

                    <div className="cardDiv">
                        <div className="card-role">
                            <h2>UI Designer</h2>
                        </div>

                        <div className="card-roleInfo">
                            <h3> Doradesign </h3>
                            <p> Mar 2022 - Oct 2023 </p>

                        </div>
                    </div>

                    <div className="cardDiv">
                        <div className="card-role">
                            <h2>Front End Developer</h2>
                        </div>

                        <div className="card-roleInfo">
                            <h3> OpacityAuthor</h3>
                            <p> Mar 2022 - Oct 2023 </p>

                        </div>
                    </div>

                </div>
                
            </div>

        </>
    )
}

export default Experience
