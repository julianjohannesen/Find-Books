import React from 'react'

export default function Hero() {
    return (
        <section className="hero" >
            <div className="hero-body" style={{padding: "1.5rem"}}>
                <div className="container">
                    <h1 className="title has-text-centered has-text-grey has-text-weight-bold">
                        BOOK FINDER
                    </h1>
                    <h2 className="subtitle has-text-centered has-text-grey">
                        Powered by Google's Books API
                    </h2>
                </div>
            </div>
        </section>
    )
}
