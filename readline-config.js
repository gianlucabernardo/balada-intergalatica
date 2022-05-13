const readline = require('readline-promise').default

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

module.exports = { rlp }