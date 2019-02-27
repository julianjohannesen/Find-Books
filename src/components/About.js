import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
    return (
        <React.Fragment>
            <Header />
                <section className="section">
                    <div className="container">
                        <p style={{marginBottom: "1em"}}>Find Books allows users to search the <a href="https://books.google.com/" title="Google Books">Google Books</a> database, "the world's most comprehensive index of full-text books". A search will return the first ten books matching a query. </p>
                
                        <p>I built Find Books during <a href="https://chingu.io/" title="Chingu">Chingu</a> Voyage 8's "pre-work" period. Chingu's goal is to bring together developers with similar competencies in complementary skills  to work on remote teams over an 8 week "voyage." Before matching teammates, the Chingu team provided voyagers with a loose spec, a mockup, and a week to complete a book search app, implementing <a href="https://developers.google.com/books/" title="Google Books API">Google's Books API</a>.</p>
                    </div>
                </section>
            <Footer />
        </React.Fragment>
        )
    }
