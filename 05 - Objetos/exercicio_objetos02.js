/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc () {
        return this.peso / (Math.pow(this.altura,2));
    }
    classificarImc() {
        const imc = this.calculoImc();
        if (imc < 18.5) {
            return 'Abaixo do peso. \nIMC: ' + imc.toFixed(2);
        } else if (imc < 25) {
            return 'Peso normal. \nIMC: ' + imc.toFixed(2);
        } else if (imc < 30) {
            return 'Acima do peso. \nIMC: ' + imc.toFixed(2);
        } else if (imc < 40) {
            return 'Obeso. \nIMC: ' + imc.toFixed(2);
        } else {
            return 'Obesidade Grave. \nIMC: ' + imc.toFixed(2);
        }
    }
}

const jose = new Pessoa('José', 92, 1.75);

console.log(jose.classificarImc());