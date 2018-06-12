'use strict';

let store = [];
let count = 1;

class User {
    add(login, password) {
        const user = {
            login,
            password,
            id: count
        };
        store.push(user);
        count++;
    }

    getUsers() {
        return store;
    }

    findUserByLoginAndPassword() {
        store.forEach(user => {
            if (user.login === login && user.password === password) {
                return user;
            }
        });
    }
}

module.exports = new User();