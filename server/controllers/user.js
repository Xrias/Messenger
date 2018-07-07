'use strict';

let store = [{id: 1, name: 'Артем', surname: 'Решетников'}];

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

    static getUserByLoginAndPassword(req, res){
        res.json(User.getUserByLoginAndPassword());
    }
};