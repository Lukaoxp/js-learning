/*
4) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const { Pares } = require('./funcoes-auxiliares');
let numeros = [5, 1, 3, 9, 10, 12];

Pares(numeros);
