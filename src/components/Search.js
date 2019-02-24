import React from 'react'

export default function Search({handleChange, handleSubmit, query}) {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={query} />
            <button type="submit">Submit</button>
        </form>
    )
}
