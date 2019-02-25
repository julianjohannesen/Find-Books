import React from 'react'
import uuidv4 from 'uuid/v4'
import BookCard from './BookCard'

export default function DisplayBooks({books}) {
    return (
        <div>
            {books.length > 0 
                ? books.map( (book) => {
                    return <BookCard book={book} key={uuidv4()} />
                }) 
                : "No results"}
        </div>
    )
}
