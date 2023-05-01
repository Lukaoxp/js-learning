//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra 'V'.

const nomes = ['Maria', 'João', 'Vinicius', 'Pedro', 'Ana', 'Vitor'];

ValidaNome(nomes);

function ValidaNome(nomes) {
    nomes.forEach(nome => {
        if (nome.charAt(0) === 'V') {
            console.log(nome);
        }
    });
}