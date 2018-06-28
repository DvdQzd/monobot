export function talk(): string[] {
  var natural = require('natural');
  var tokenizer = new natural.WordTokenizer();
  return tokenizer.tokenize('your dog has fleas.');
}
