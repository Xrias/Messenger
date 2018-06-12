'use strict';

const { error404 } = require('./controllers/errors');
const PlaceController = require('./controllers/place');
const ContactsController = require('./controllers/contacts');

module.exports = app => {
    app.get('/', ContactsController.getContacts)
    app.post('/', ContactsController.addContact)

    app.all('*', error404);
};
