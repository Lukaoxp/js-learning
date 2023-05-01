//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 2;

tabuada(numero);

function tabuada(numero) {
    console.log(`Tabuade de ${numero}`)
    for (i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}