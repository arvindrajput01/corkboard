import * as React from 'react'
import '../stylesheet/HeaderSearch.css';
const SearchBar = () => {
    const globalSearch = evt => {
        //setWidth(evt.target.value.length);
    };
    return(    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search...</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Type to search..."
            name="header-search" 
            
            onChange={globalSearch} 
        />
        <button type="submit" class="headerSearchButton"> Search</button>
    </form>
    )


};

export default SearchBar;