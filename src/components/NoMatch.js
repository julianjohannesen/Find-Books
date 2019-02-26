import React from 'react'
//import { Link } from 'react-router-dom'
// import Header from '../../archive/Header'
// import Footer from '../../archive/Footer'

export default function NoMatch({ location }) {
    return (

        <div>
            
            <h1>No match for <code>{location.pathname}</code></h1>
            <p>Return Home</p>
        
        </div>

    )
}
