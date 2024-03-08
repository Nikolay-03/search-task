import {useContext, useEffect, useMemo} from "react";
import {SearchContext} from "./SearchContext";
import {UserCard} from "../UserCard/UserCard";

import "./style.css";
import {IUser} from "../../types/User.ts";
import {useFetching} from "../../hooks/useFetching.ts";
import UserService from "../../API/UserService.ts";


export function SearchResults() {
    const {users, searchQuery, setUsers} = useContext(SearchContext);
    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const response: { users: IUser[] } = await UserService.getSearchedUsers(searchQuery);
        setUsers(response.users);
    });
    useEffect(() => {
        fetchUsers();
    }, [searchQuery]);
    const usersList = useMemo(() => {
        if (users.length > 0) {
            return users.map(user => <UserCard user={user} key={user.id} />);
        } else {
            return <span>Пользователи не найдены</span>;
        }
    }, [users]);

    return (
        <div className="usersList">
            {isLoading ? <div>Loading...</div> : error ? <div>{error}</div> : usersList}
        </div>
    );
}