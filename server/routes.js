'use strict';

const { error404 } = require('./controllers/errors');
const ContactsController = require('./controllers/contacts');
const UserController = require('./controllers/user');
const AuthorizationController = require('./controllers/authorization');

module.exports = app => {
    app.post('/register', UserController.addUser)
    app.post('/users', UserController.getUserByLoginAndPassword)

    app.all('*', error404);
};
