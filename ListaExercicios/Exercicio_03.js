/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let condicaoPagamento = 'parcelado'; //vista ou parcelado
let formaPagamento = 'pix'; //debito, dinheiro ou pix
let parcelamento = 3; //quantidade de parcelas
let precoEtiqueta = 122.2;

if (condicaoPagamento === 'vista') {
    if (formaPagamento === 'debito') {
        console.log('Preco a pagar:\n' + (precoEtiqueta - (precoEtiqueta * 0.1)).toFixed(2));
    } else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
        console.log('Preco a pagar:\n' + (precoEtiqueta - (precoEtiqueta * 0.15)).toFixed(2));
    } else {
        console.log('Forma de pagamento a vista invalido');
    }
} else if (condicaoPagamento === 'parcelado') {
    if (parcelamento === 2) {
        console.log('Preco a pagar:\n' + precoEtiqueta)
    }
    else {
        console.log('Preco a pagar:\n' + (precoEtiqueta + (precoEtiqueta * 0.1)).toFixed(2))
    }
} else {
    console.log('Condição de pagamento invalida');
}