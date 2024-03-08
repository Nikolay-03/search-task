import {createContext} from "react";
import {IUser} from "../../types/User.ts";

interface ISearchContext {
    users: IUser[];
    setUsers: (value: IUser[]) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
    users: [],
    setUsers: () => {
    },
    searchQuery: '',
    setSearchQuery: () => {
    },
});

