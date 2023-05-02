// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print, maiormenor } = require('./funcoes_auxiliares_02');

let quantidadeNumeros = 6;
let teste = [];

for (let i = 0; i < quantidadeNumeros; i++){
    teste.push(gets());
}

print(maiormenor(teste));