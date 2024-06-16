const prompt = require('readline-sync')

const idade = prompt.question("Qual sua idade?")

const idadeNumber = Number(idade)

console.log(idadeNumber, typeof idadeNumber);

// Coersão Explícita (conversão Manual)

console.log(Number("X")); //NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

// Coersão Implícita

console.log(1 + "1")
console.log(10 - "5")