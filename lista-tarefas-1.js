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

