import React from 'react'

export default function Search({handleChange, handleSubmit, query}) {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="search by title, author, isbn" required type="text" value={query} />
            <button type="submit">Submit</button>
        </form>
    )
}
