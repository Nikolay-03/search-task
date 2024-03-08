import "./styles.css";
import React, {useContext} from "react";
import {SearchContext} from "../SearchResults/SearchContext.ts";


export function SearchForm() {
    const {
        searchQuery,
        setSearchQuery,
    } = useContext(SearchContext);
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };


    return (
        <div className="searchForm">
            <form>
                <input type="text" value={searchQuery} onChange={handleSearchChange}/>
            </form>
            <div className="statusMessage">
            </div>
        </div>
    );
}
