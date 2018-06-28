"use strict";
exports.__esModule = true;
function talk() {
    var natural = require('natural');
    var tokenizer = new natural.WordTokenizer();
    return tokenizer.tokenize('your dog has fleas.');
}
exports.talk = talk;
