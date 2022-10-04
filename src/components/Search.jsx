import React, { useRef } from 'react'

const Search = (props) => {
    const searchRef = useRef("");

    const submitForm = (e) => {
        e.preventDefault();
        props.onSubmit(searchRef);
    };

    return (
        <form onSubmit={submitForm}>
            <label>
                <h3>Search for Gifs!</h3>
                <input
                    text="text"
                    ref={searchRef}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Search;