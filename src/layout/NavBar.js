import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

    // Modifier class 'is-active' will turn the hamburger menu into a cross (does it also expand the menu?)

    // When the hamburger menu appears the aria-hidden attribute on each span must be set to false

    return (
        //Navbar docs: https://bulma.io/documentation/components/navbar/
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div 
                    className="navbar-burger burger" 
                    data-target="navbar" 
                    aria-label="menu" 
                    aria-expanded="false" 
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                </div>
                <div className="navbar-end">

                    <div className="navbar-item">
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="/about">
                            About
                        </Link>
                    </div>


                </div>
            </div>
        </nav>

    )
}