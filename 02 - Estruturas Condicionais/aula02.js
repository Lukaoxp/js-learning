let numero = 0;

console.log(numero + " é par? \n" + ehPar(numero));

function ehPar(numero) {
    if (numero === 0) {
        return "Numero invalido";    
    }
    else if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}