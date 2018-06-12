'use strict';

const { error404 } = require('./controllers/errors');
const ContactsController = require('./controllers/contacts');
const UserController = require('./controllers/user');

module.exports = app => {
    app.post('/', UserController.addUser)

    app.all('*', error404);
};
