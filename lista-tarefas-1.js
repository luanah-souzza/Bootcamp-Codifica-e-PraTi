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
