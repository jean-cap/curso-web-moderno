var a = 3;
let b = 4;

var a = 30; // var permite redeclarar a variável
b = 40; // let não permite redeclarar, usar sempre let

console.log(a, b);

const c = 5;
// c = 50; TypeError: Assignment to constant variable.
console.log(c);