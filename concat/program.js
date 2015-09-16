'use strict';

var concat = require('concat-stream');

function write(body) {
  this.push(JSON.parse(body));
}

process.stdin.pipe(concat()).pipe(process.stdout);
