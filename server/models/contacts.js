'use strict';

let store = [{name: 'Михаил', surname: 'Левшин', male: 'М', id: '1'}];
let count = 1;

class Contacts {
    add(name, surname, male) {
        const contact = {
            name,
            surname,
            male,
            id: count
        };
        store.push(contact);
        count++;
    }

    getContacts() {
        return store;
    }
}

module.exports = new Contacts();
