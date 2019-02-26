import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Book Finder by <a href="https://www.github.com/julianjohannesen" title="Find me on GitHub">Julian Johannesen</a></p>
                <p>
                    <a className="is-size-1" href="https://www.github.com/julianjohannesen/find-books" title="See this project on Github"><i className="fab fa-github has-text-dark"></i></a>
                </p>
            </div>
        </footer>
    )
}
