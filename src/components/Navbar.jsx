import React, { useState } from 'react'
import '../assets/styles/Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {

    const [current, setCurrent] = useState("Home")
    const [MenuOpen, setMenuOpen] = useState(false)

    const menuHeaders = ["Home", "About", "Projects", "Contact"]

    return (
        <>
            <div className='navbar'>
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className={`navbar-menu ${MenuOpen ? 'active' : ''}`}>
                    <ul>
                        {
                            menuHeaders.map((name, index) => {
                                return (
                                    <li key={index} onClick={() => { setCurrent(name); setMenuOpen(false) }} className={current === name ? "active" : ""}>
                                        {name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="navbar-hireme">
                    <button className="hiremeContainer">
                        Hire Me
                    </button>
                </div>

                <div className="navbar-toggle" onClick={() => setMenuOpen(!MenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </>
    )
}

export default Navbar
