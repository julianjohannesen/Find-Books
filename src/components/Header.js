import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="title">Book Finder</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}
