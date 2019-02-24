import React from 'react'
//import smallThumbnailDefault from '../assets/smallThumbnailDefault.svg'
//import thumbnailDefault from '../assets/thumbnailDefault.svg'

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
        //imageLinks = {smallThumbnail: smallThumbnailDefault, thumbnail: thumbnailDefault},
        language = 'en',
        previewLink = null,
        infoLink = null,
        canonicalVolumeLink = null,
    } = book.volumeInfo

    return (
        <div>
            <h2>
                {title}
            </h2>
        </div>
    )
}
