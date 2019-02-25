import React from 'react'
//import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function NoMatch({ location }) {
    return (

        <div>
            <Header />
            <h1>No match for <code>{location.pathname}</code></h1>
            <p>Return Home</p>
            <Footer />
        </div>

    )
}
