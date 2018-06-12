'use strict';

const Message = require('message.js');

let chatStore = [];

module.exports = class Chat {
    constructor (members, messages) {
        this.members = members;
        this.messages = [];
    }

    addMessage(author, text) {
        this.messages.push(new Message(author, text, new Date()));
    }

    addMember(members) {
        for (let member of members) {
            this.members.push(member);
        }
    }
}

