import largeNumber from 'script2.js'

const a = 4;
const b = 5;

console.log(__dirname);
console.log(a+b);

setTimeout( () => {
	console.log(a+b);
}, 3000)
