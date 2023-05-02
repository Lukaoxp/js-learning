const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return(valor);
}

function print(texto) {
    console.log(texto);
}

function maiormenor(valores) {
    let maiorPar = valores[0];
    let menorImpar = valores[0];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            if (valores[i] > maiorPar) {
                maiorPar = valores[i];
            }
        } else {
            if (valores[i] < menorImpar) {
                menorImpar = valores[i];
            }
        }
    }
    return `Maior numero par ${maiorPar} \nMenor numero impar = ${menorImpar}`;
}
module.exports = { gets, print, maiormenor };