/*
Refatorando o exercicio 2 da pasta anterior, utilizando função.
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function main() {
    const peso = 94;
    const altura = 2.05;

    const imc = calculaImc(peso, altura);
    console.log(classificaImc(imc));
}

main();

function calculaImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificaImc(imc) {
    
    if (imc < 18.5) {
        return "Abaixo do peso. \nIMC: " + imc.toFixed(2);
    } else if (imc < 25) {
        return "Peso normal. \nIMC: " + imc.toFixed(2);
    } else if (imc < 30) {
        return "Acima do peso. \nIMC: " + imc.toFixed(2);
    } else if (imc < 40) {
        return "Obeso. \nIMC: " + imc.toFixed(2);
    } else {
        return "Obesidade Grave. \nIMC: " + imc.toFixed(2);
    } 
    
}