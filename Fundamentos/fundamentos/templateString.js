const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
Olá
${nome}!`;

console.log(concatenacao); // Olá Rebeca!
console.log(template); // Olá
                       // Rebeca!

// expressões:
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = s => s.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`); // Ei... CUIDADO!