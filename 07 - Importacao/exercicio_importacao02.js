/*
2) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            [...]
*/

const { sets, tabuada } = require('./funcoes-auxiliares');

let valor = 10;

tabuada(sets(valor));