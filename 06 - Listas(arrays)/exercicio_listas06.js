/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 8, 10, 4];

let maior = 0;

console.log(`A maior nota é: ${MaiorNota(notas)}`);

function MaiorNota(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (maior < notas[i]) {
            maior = notas[i];
        }
    }
    return maior;
}