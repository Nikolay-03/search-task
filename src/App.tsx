import {useState} from "react";
import {SearchForm} from "./components/SearchFrom/SearchForm";
import {SearchContext} from "./components/SearchResults/SearchContext";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {IUser} from "./types/User.ts";

export default function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <SearchContext.Provider value={{users, setUsers, searchQuery, setSearchQuery}}>
            <SearchForm/>
            <SearchResults/>
        </SearchContext.Provider>
    );
}
