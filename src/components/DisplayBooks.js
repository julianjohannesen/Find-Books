import React from 'react'
import uuidv4 from 'uuid/v4'
import BookCard from './BookCard'

export default function DisplayBooks({ books }) {
    console.log(books)
    const generateRows = () => {
        let arr = []
        for(let i=1; i<=books.length; i++) {
            if(i % 3 === 0) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">
                    <BookCard book={books[i-3]} />     
                    <BookCard book={books[i-2]} />     
                    <BookCard book={books[i-1]} />     
                </div>
            ))
            if(i+1 === i.length) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">
                    <BookCard book={books[i]} />         
                </div>
            ))
            if(i+2 === i.length) arr.push((
                <div key={uuidv4()} className="tile is-ancestor">
                    <BookCard book={books[i]} />         
                    <BookCard book={books[i+1]} />         
                </div>
            ))
        }
        return arr
    }
    
    return (
        <section className="section">
        
        {
            books.length > 0
            ? generateRows()
            : <p className="has-text-centered is-size-3">No results</p>
        }
                
        </section>
    )
}
