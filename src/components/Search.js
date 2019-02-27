import React from 'react'

export default function Search({ handleBlur, handleChange, handleFocus, handleSubmit, isValid, query }) {
    return (
        <section className="section">
            <form className="field is-centered is-grouped" onSubmit={handleSubmit}>
                <input
                    className={isValid ? "input is-large" : "input is-large is-danger"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    placeholder="search by title, author, isbn"
                    required 
                    style={{borderTopRightRadius: "0", borderBottomRightRadius: "0",}}
                    type="text"
                    title="Search by title, author, or ISBN"
                    value={query}
                />
                <button
                    aria-haspopup="true"
                    className="button is-large is-primary"
                    style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}
                    type="submit"
                >
                    Submit
            </button>
            </form>
        </section>
    )
}
