let i = 0;
let internalvalues = [];

function gets(internalvalues) {
    const valor = internalvalues[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

function sets(input) {
    let valores = [];
    let valor = 0;
    if (typeof input === 'number') {
        valor = input;
        return valor;
    }
    else {
        for (i; i < input.length; i++) {
            valores.push(input[i]);
        }
        return valores;
    }
}

function tabuada(numero) {
    console.log(`Tabuada de ${numero}`)
    for (i = 1; i <= 10; i++) {
        console.log(`${numero}x${i} = ${numero * i}`);
    }
}

function maiorMenor(numeros) {
    let maior = numeros[1];
    let menor = numeros[1];
    for (i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    for (i = 1; i < numeros.length; i++) { 
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    console.log(`Maior número ${maior}`);
    console.log(`Menor número ${menor}`);
}

function Pares(numeros) {
    let numerospares = [];
    for (i = i+1; i < numeros.length; i++) { 
        if (numeros[i] % 2 === 0) {
            numerospares.push(numeros[i]);
            console.log(numeros[i]);
        }
    }
}

function Maior(numeros) { 
    let maior = numeros[0];
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}

module.exports = {
    gets,
    print,
    sets,
    tabuada,
    maiorMenor,
    Pares,
    Maior
}