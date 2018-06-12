'use strict';

let store = [];

const Contacts = require('../models/contacts');

module.exports = class ContactsController {
    static addContact(req, res) {
        const { name, surname, male } = req.body;
        Contacts.add(name, surname, male);
        res.send('OK');
    }

    static getContacts(req, res) {
        res.json(Contacts.getContacts());
    }
};