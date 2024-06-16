const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual sua idade? "))

// Estrutura condicional: if/Else

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

const mediaDoAluno = 4;

if (mediaDoAluno >= 7) {
    console.log("Aprovado");
} else if (mediaDoAluno >= 5) {
    console.log("Em Recuperação");
} else {
    console.log("Reprovado")
}