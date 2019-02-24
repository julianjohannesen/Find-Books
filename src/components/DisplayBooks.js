import React from 'react'
import BookCard from './BookCard'

export default function DisplayBooks({books}) {
    return (
        <div>
            {books.length > 0 
                ? books.map( (book) => {
                    return <BookCard book={book} />
                }) 
                : "No results"}
        </div>
    )
}
