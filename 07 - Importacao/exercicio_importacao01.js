/*
1) Uma sala contem 5 alunos e para cada um foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado;

Dados de entrada:
5, 50, 10, 98, 23;

Saída:
98
*/

const { sets, Maior,print } = require('./funcoes-auxiliares');

const valores = [5, 50, 10, 98, 23];

print(Maior(sets(valores)));