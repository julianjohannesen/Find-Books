import React from 'react'
import uuidv4 from 'uuid/v4'

export default function BookDetails({book,handleClose,show}) {

    const {
        title = 'Title unavailable',
        authors = ['Author unavailable'],
        publisher = 'Publisher unavailable]',
        publishedDate = 'Published date unavailable',
        description = 'Description unavailable',
        pageCount = 'Page count unavailable',
        categories = ['Categories unavailable'],
        averageRating = 0,
        ratingsCount = 0,
        imageLinks = { thumbnail: thumbnailDefault },
        //language = 'Language unavailable',
        //previewLink = '',
        infoLink = '',
        //canonicalVolumeLink = '',
    } = book.volumeInfo

    return (
        <div class={show ? "modal display-block" : "modal display-none"} >
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{title}</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <figure 
                        className="image is-pulled-left" 
                        style={{ maxWidth: "128px", marginRight: "1em", marginTop: "-65px", }}
                    >
                        <img 
                            src={imageLinks.thumbnail} 
                            alt="Book cover" 
                            style={{ backgroundColor: "#ccc", border: "1px solid #ccc", }} 
                        />
                    </figure>

                    <div style={{ marginLeft: "calc(128px + 2em)" }}>
                        <h3 className="subtitle" >
                            By: {authors.map(auth => <span key={uuidv4()}>{auth} </span>)}
                        </h3>
                        <h4 className="subtitle" style={{ marginTop: "-1.25rem" }} >
                            {averageRating ? `Average rating: ${averageRating} (${ratingsCount} ratings)` : 'No ratings yet.'}
                        </h4>
                        <p>{description.substring(0, 500)}</p>
                        <p>{`Publisher: ${publisher}. Publication Date: ${publishedDate}`}</p>
                        <p>Pages: {pageCount}</p>
                        <p>{categories.map(cat => <span key={uuidv4()}>{cat}</span>)}</p>
                    </div>
                </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Shelve</button>
                        <button class="button">Cancel</button>
                    </footer>
            </div>
            </div>
            )
        }
