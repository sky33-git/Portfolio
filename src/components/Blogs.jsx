import React from 'react'
import '../assets/styles/Blogs.css'
import star from '../assets/images/star.png'
import works_img1 from '../assets/images/works_img1.png'
import works_img2 from '../assets/images/works_img2.png'
import works_img3 from '../assets/images/works_img3.png'

const Blogs = () => {
    return (
        <>
            <div className="blog">
                <div className="blogContainer">
                    <div className="blogHeader">

                        <div style={{ display: "flex" }}>
                            <img src={star} alt="" />
                            <h1 style={{ marginLeft: "12px" }}>Blogs</h1>
                        </div>

                        <div style={{ textDecoration: "underline", paddingBottom: "10px", cursor: "pointer"}}>
                            viewall
                        </div>
                    </div>

                    <div className="blogCard">
                        <div className='blogImg'>
                            <img src={works_img1} alt="" />
                        </div>

                        <div className='blogInfo'>
                            <p>Nov 9, 2023</p>
                            <h2>How UX works in web</h2>
                            <div className='blogInfo-button'>
                                <button>UI</button>
                                <button>UX</button>
                            </div>
                        </div>

                        <div className='readBlog'>
                            <button>Read</button>
                        </div>

                    </div>

                    <div className="blogCard">
                        <div className='blogImg'>
                            <img src={works_img2} alt="" />
                        </div>

                        <div className='blogInfo'>
                            <p>Aug 18, 2023</p>
                            <h2>Case study - Analysis Application.</h2>
                            <div className='blogInfo-button'>
                                <button>DESIGN</button>
                                <button>PRINT</button>
                            </div>
                        </div>
                        
                        <div className='readBlog'>
                            <button>Read</button>
                        </div>

                    </div>

                    <div className="blogCard">
                        <div className='blogImg'>
                            <img src={works_img3} alt="" />
                        </div>

                        <div className='blogInfo'>
                            <p>Feb 16, 2023</p>
                            <h2>3 ways to develop your skill</h2>
                            <div className='blogInfo-button'>
                                <button>FIGMA</button>
                                <button>WEB</button>
                            </div>
                        </div>
                        
                        <div className='readBlog'>
                            <button>Read</button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Blogs
