import React from 'react'

export default function Search({ handleBlur, handleChange, handleFocus, handleSubmit, isValid, query }) {
    return (
        <form className="field is-centered is-grouped" onSubmit={handleSubmit}>
            <input
                className={isValid ? "input is-large" : "input is-large is-danger"}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="search by title, author, isbn"
                //required 
                type="text"
                title="Search by title, author, or ISBN"
                value={query}
            />
            <button 
                className="button is-large is-primary" 
                type="submit"
            >
                    Submit
            </button>
        </form>
    )
}
