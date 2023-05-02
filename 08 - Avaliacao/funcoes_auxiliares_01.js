const entradas = [5.5];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function media(valor) {
    let estado;
    if (valor < 5) {
        estado = `Reprovado`;
    }
    else if (valor < 7) {
        estado = `Recuperacao`;
    }
    else {
        estado = `Aprovado`;
    }
    return estado;
}

module.exports = { gets, print, media };