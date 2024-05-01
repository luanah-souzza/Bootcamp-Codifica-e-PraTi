// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.
let tempCelcius = 150;
let tempFah = (tempCelcius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é ${tempFah.toFixed(2)}°F`);

// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.
let votosBrancos = 50;
let votosNulos = 50;
let votosValidos = 50;

let totalVotos = votosBrancos + votosNulos + votosValidos;
let percentualBrancos = (votosBrancos / totalVotos) * 100;
let percentualNulos = (votosNulos / totalVotos) * 100;
let percentualValidos = (votosValidos / totalVotos) * 100;

console.log(`A quantidade de votos brancos foi de ${votosBrancos}, de votos nulos ${votosNulos} e de de votos válidos foi de ${votosValidos}`)
console.log(`O percentuak de votos brancos foi de ${percentualBrancos.toFixed(2)}, de votos nulos ${percentualNulos.toFixed(2)} e de de votos válidos foi de ${percentualValidos.toFixed(2)}`)

// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.
let num1 = 10;
let num2 = 6;
let num3 = 3;
let num4 = 2;
console.log(`Resultado final do número 1: ${num1 + 25}`);
console.log(`Resultado final do número 2: ${num2 * 3}`);
console.log(`Resultado final do número 3: ${12 / (num3 * 100)}`);
console.log(`Resultado final do número 4: ${num1 + num2 + num3 + num4}`);

// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).
let nota1 = 5;
let nota2 = 6;
let media = (nota1 + nota2) / 2;
if (media >= 6) {
    console.log('PARABÉNS! Você foi aproado(a).');
} else {
    console.log('Você foi REPROVADO! Estude mais.');
}

// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
let A = 0;
let B = 20;
let C = 20;
if (A < (B + C) && B < (A + C) && C < (A + B)) {
    if (A == B || A == C || B == C) {
        console.log("Triângulo isósceles");
    } else if (A != B && B != C) {
        console.log("Triângulo escaleno");
    } else if (A == B && B == C) {
        console.log("Triângulo equílatero");
    }
} else {
    console.log ("Os valores fornecidos não formam um triângulo!")
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
let quantidadeMacas = 14;
let valorTotal;
if (quantidadeMacas < 12) {
    valorTotal = quantidadeMacas * 0.30;
} else {
    valorTotal = quantidadeMacas * 0.25;
}
console.log(`Foram compradas ${quantidadeMacas} maçãs e o valor total foi de R$ ${valorTotal.toFixed(2)}`)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
let valor1 = 30;
let valor2 = 15;
if(valor1 > valor2) {
    console.log(`${valor2}, ${valor1}`)
} else {
    console.log(`${valor1}, ${valor2}`)
}

// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:
let codigo = 20;
if (codigo == 1) {
    console.log("Sul");
} else if (codigo == 2) {
    console.log("Norte");
} else if (codigo == 3) {
    console.log("Leste");
} else if (codigo == 4) {
    console.log("Oeste");
} else if (codigo == 5 || codigo == 6) {
    console.log("Nordeste");
} else if (codigo >= 7 && codigo <= 9) {
    console.log("Sudeste");
} else if (codigo >= 10 && codigo <= 20) {
    console.log("Centro-Oeste");
} else if (codigo >= 25 && codigo <= 50) {
    console.log("Centro-Sul");
} else {
    console.log("Fora dos intervalos - Produto importado")
}


