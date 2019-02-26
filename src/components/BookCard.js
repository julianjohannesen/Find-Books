import React from 'react'
import uuidv4 from 'uuid/v4'
//import smallThumbnailDefault from '../assets/smallThumbnailDefault.png'
import thumbnailDefault from '../assets/thumbnailDefault.png'

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
        imageLinks = { smallThumbnail: null, thumbnail: thumbnailDefault },
        //language = 'en',
        //previewLink = null,
        infoLink = null,
        //canonicalVolumeLink = null,
    } = book.volumeInfo

    return (
        <div className="tile is-parent" style={{ marginTop: "60px", }}>
            <div className="tile is-child box" >
                <figure className="image is-pulled-left" style={{ maxWidth: "128px", marginRight: "1em", marginTop: "-65px", }}>
                    <img src={imageLinks.thumbnail} alt="Book cover" style={{ backgroundColor: "#ccc", border: "1px solid #ccc", }} />
                </figure>
                <div className="" style={{marginLeft:"calc(128px + 2em)"}}>
                    <h2 className="title">
                        <a className="is-size-4" href={infoLink} title={title}>{title}</a>
                    </h2>
                    <h3 className="subtitle" >
                        By: {authors.map(auth => <span key={uuidv4()}>{auth} </span>)}
                    </h3>
                    <h4 className="subtitle" style={{marginTop: "-1.25rem"}} >
                        {averageRating ? `Average rating: ${averageRating} (${ratingsCount} ratings)` : 'No ratings yet.'}
                    </h4>
                    <button className="button is-primary" type="button">See this Book</button>
                </div>
            </div>
        </div>

    )
}

// <p>{description.substring(0, 250)}</p>
//                 <p>{`Publisher: ${publisher}. Publication Date: ${publishedDate}`}</p>
//                 <p>Pages: {pageCount}</p>
//                 <p>{categories.map(cat => <span key={uuidv4()}>{cat}</span>)}</p>
