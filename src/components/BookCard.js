import React from 'react'

export default function BookCard({book}) {
  return (
    <div>
      {book.volumeInfo.title}
    </div>
  )
}
