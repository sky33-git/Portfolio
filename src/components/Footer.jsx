import React from 'react'
import '../assets/styles/Footer.css'
import star from '../assets/images/star.png'


const Footer = () => {
    return (
        <>


            <div className="footer">

                <div className="footerContainer">


                    <div className="marqueeContainer">

                        <marquee behavior="" scrollamount='10' >
                            <img src={star} alt="*" /> 𝔽𝕀𝔾𝕄𝔸
                            <img src={star} alt="*" /> 𝔻𝔼𝕊𝕀𝔾ℕ𝔼ℝ
                            <img src={star} alt="*" /> 𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ
                            <img src={star} alt="*" /> 𝕎𝔼𝔹𝔽𝕃𝕆𝕎
                            <img src={star} alt="*" /> 𝕌𝕀
                            <img src={star} alt="*" /> 𝕌𝕏

                        </marquee>
                    </div>




                    <div>
                        <h1>
                            LET’S TALK!
                        </h1>
                        <p>sunilsks2017@gmail.com <span>🡵</span></p>
                    </div>

                    <div className="footerFooter">
                        <div>
                            © Sunil Kumar Yadhav - 2025
                        </div>

                        <div>
                            <ul>
                                <li>Dribbble</li>
                                <li>Behance</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Footer
