// const mathjs = require('mathjs');
// console.log(mathjs.evaluate);
const { evaluate } = require('mathjs'); // get mathjs.evaluate
console.log(evaluate);

const firstParam = process.argv[2];
const operator = process.argv[3];
const secondParam = process.argv[4];

console.log('result is ' + evaluate(firstParam + operator + secondParam));
