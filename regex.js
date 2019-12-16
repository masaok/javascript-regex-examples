#!/usr/bin/env node

let string = "skdfs342dfskjs342"
let regex = /342/g
string = string.replace(regex, '')
console.log(string)

string = string.replace(/3/, 'AAA')
console.log(string)

var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

