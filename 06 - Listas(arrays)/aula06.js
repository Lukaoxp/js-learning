const notas = [1, 2, 5, 4, 3];
let soma = 0;

soma = Soma(notas);

function Soma(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

let media = Media(soma, notas);

function Media(soma, array) {
    return soma / array.length;
}

console.log(`Media = ${media}`);