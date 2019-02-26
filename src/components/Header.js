import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

export default function Header(props) {
    return (
        <header className="hero">
            <NavBar />
            <Hero />     
        </header>
    )
}
