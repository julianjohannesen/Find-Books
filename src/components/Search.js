import React from 'react'

export default function Search({handleBlur, handleChange, handleSubmit, query}) {
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" onBlur={handleBlur} onChange={handleChange} placeholder="search by title, author, isbn" required type="text" value={query} />
            <button className="button is-large is-success" type="submit">Submit</button>
        </form>
    )
}
