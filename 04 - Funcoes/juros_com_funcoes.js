/*
Refatorando o exercicio 3 da pasta anterior, utilizando função.
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem porcentagem;
- Acima de duas vezes, preço normal de etiqueta mais porcentagem de 10%;
*/

(function () {
    let condicaoPagamento = 1; //vista = 1, parcelado = 2
    let formaPagamento = 4; //debito = 1, dinheiro = 2, pix = 3
    let parcelamento = 2; //quantidade de parcelas
    let precoEtiqueta = 100;

    console.log(pagamento(condicaoPagamento, formaPagamento, parcelamento, precoEtiqueta));

})();

function pagamento(condicaoPagamento, formaPagamento, parcelamento, precoEtiqueta) {
    if (condicaoPagamento === 1) {
        jurosOuDesconto = 1;
        if (formaPagamento === 1) {
            return calculaValor(precoEtiqueta, jurosOuDesconto, 10);
        } else if (formaPagamento === 2 || formaPagamento === 3) {
            return calculaValor(precoEtiqueta, jurosOuDesconto, 15);
        } else {
            return 'Forma de pagamento a vista invalido';
        }
    } else if (condicaoPagamento === 2) {
        jurosOuDesconto = 2;
        if (parcelamento === 2) {
            return 'Preco a pagar:\nR$' + precoEtiqueta.toFixed(2);
        }
        else {
            return calculaValor(precoEtiqueta, jurosOuDesconto, 10);
        }
    } else {
        return 'Condição de pagamento invalida';
    }
}

function calculaValor(preco, jurosOuDesconto, porcentagem) {
    valorPorcentagem = (preco * (porcentagem / 100));

    if (jurosOuDesconto === 1) {
        valor = preco - valorPorcentagem;
        return 'Preco a pagar:\nR$' + valor.toFixed(2);
    } else if (jurosOuDesconto === 2) {
        valor = preco + valorPorcentagem;
        return 'Preco a pagar:\nR$' + valor.toFixed(2);
    }
}