'use strict';

module.exports = class Message {
    constructor (author, text, time) {
        this.author = author;
        this.text = text;
        this.time = time;
    }
}

