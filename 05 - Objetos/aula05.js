
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}`);
    }
}

const lucas = new Pessoa('Lucas', 28);
const gabriel = new Pessoa('Gabriel', 28);

compararPessoas(lucas, gabriel);


function compararPessoas(p1, p2) { 
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }
    else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}