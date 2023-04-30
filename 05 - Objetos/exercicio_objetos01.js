/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioCombustivelKM;

    constructor(marca, cor, gastoMedioCombustivelKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKM = gastoMedioCombustivelKM;
    }

    valorGasto (distancia, valorCombustivel) {
        console.log('Valor gasto: R$'+(distancia / this.gastoMedioCombustivelKM * valorCombustivel).toFixed(2));
    }
}

const fiesta = new Carro('Ford', 'Prata', 12);
const argo = new Carro('Fiat', 'Branco', 10);

fiesta.valorGasto(70, 5);
argo.valorGasto(100, 5.6);