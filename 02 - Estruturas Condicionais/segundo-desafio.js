/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.   
*/

let precoEtanol = 4.22;
let precoGasolina = 5.79;
let tipoCombustivel = 'Gasolina';
let gastoMedioCombustivel = 10;
let distancia = 100;

let gasto =  gastoCombustivel(gastoMedioCombustivel, distancia)

if (tipoCombustivel === 'Gasolina') {
    console.log(valorGasto(precoGasolina, gasto).toFixed(2));
}
else if(tipoCombustivel === 'Etanol'){
    console.log(valorGasto(precoEtanol, gasto).toFixed(2));
}
else {
    console.log('Tipo de combustível inválido');
}

function gastoCombustivel(gastoMedioCombustivel, distancia) {
    return distancia / gastoMedioCombustivel;
}
function valorGasto(precoCombustivel, gasto) {
    return precoCombustivel * gasto;
}