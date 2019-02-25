import React from 'react'
import uuidv4 from 'uuid/v4'
import smallThumbnailDefault from '../assets/smallThumbnailDefault.svg'
import thumbnailDefault from '../assets/thumbnailDefault.svg'

export default function BookCard({ book }) {

    const {
        title = 'Title unavailable',
        authors = ['Author unavailable'],
        publisher = 'Publisher unavailable]',
        publishedDate = 'Published date unavailable',
        description = 'Description unavailable',
        pageCount = 'Page count unavailable',
        categories = ['Categories unavailable'],
        averageRating = null,
        ratingsCount = null,
        imageLinks = {smallThumbnail: smallThumbnailDefault, thumbnail: thumbnailDefault},
        //language = 'en',
        //previewLink = null,
        infoLink = null,
        //canonicalVolumeLink = null,
    } = book.volumeInfo

    return (
        <div>
            <h2><a href={infoLink} title={title}>{title}</a></h2>
            <p>{authors.map(auth=><span key={uuidv4}>{auth}</span>)}</p>
            <p>{`Published by ${publisher}, ${publishedDate}`}</p>
            <p>{description}</p>
            <p>Pages: {pageCount}</p>
            <p>{categories.map(cat=><span key={uuidv4}>{cat}</span>)}</p>
            <p>Average rating: {averageRating} ({ratingsCount})</p>
            <figure>
                <img src={imageLinks.thumbnail} alt="Book cover"/>
            </figure>
        </div>
    )
}
