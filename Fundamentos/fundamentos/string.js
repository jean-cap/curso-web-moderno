const escola = 'Cod3r';

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // retorna string vazia, não existe posição 5 na string
console.log(escola.charCodeAt(3)); // 51
console.log(escola.indexOf('3')); // 3

console.log(escola.substring(1)); // od3r
console.log(escola.substring(0, 3)); // Cod

console.log('Escola ' + escola + '!'); // Escola Cod3r!
console.log('Escola '.concat(escola).concat('!')); // Escola Cod3r!
console.log(escola.replace(/\d/, 'e')); // Coder

console.log('Ana,Maria,Pedro'.split(',')); // [ 'Ana', 'Maria', 'Pedro' ]
