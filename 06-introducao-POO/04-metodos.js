class Pessoa{

    constructor(nome, nota){
        this.nome = nome;
        this.nome = nota;
    };
    apresentar(){
        console.log(`${this.nome} - Nota ${this.nota}`);
    }
}

const aluno1 = new Pessoa("Julia" , 10);
const aluno2 = new Pessoa("Kauan" , 8);
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());