const baseUrl = 'http://localhost:8080/';

class AuthorizationApi {
    async isUser (login, password) {
        return (await fetch(baseUrl + 'users', { method: 'POST' })).json();
    }
}

const authorizationApi = new AuthorizationApi();

export default authorizationApi;
