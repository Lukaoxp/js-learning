const entradas = [2000, 250];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function calculoSalario(valores) {
    const salario = valores[0];
    const beneficio = valores[1];
    let salarioliquido;
    if (salario <= 1100.00) {
        salarioliquido = salario - (salario * 0.05)
    }
    else if (salario <= 2500.00) {
        salarioliquido = salario - (salario * 0.1)
    }
    else {
        salarioliquido = salario - (salario * 0.15)
    }
    
    let salariototal = salarioliquido + beneficio;

    return salariototal;
}

module.exports = { gets, print, calculoSalario };