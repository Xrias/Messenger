'use strict';

let store = [];

const User = require('../models/user');

module.exports = class UserController {
    static addUser(req, res) {
        const { login, password } = req.body;
        User.add(login, password);
        res.send('OK');
    }

    static getUsers(req, res) {
        res.json(User.getUsers());
    }
};