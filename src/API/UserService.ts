export default class UserService {
    static async getSearchedUsers(query: string) {
        const response = await fetch(`https://dummyjson.com/users/search?q=${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
        return response
    }
}