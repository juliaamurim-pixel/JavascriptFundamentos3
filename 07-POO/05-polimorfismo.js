// class funcionario{
//     constructor(nome, salario){
//         this.nome=nome;
//         this.salario=salario;
//     }
//     apresentar(){
//         console.log(`${this.nome} ganha de salário ${this.salario}`);
//     }
// }
// class Professor extends funcionario{
//     constructor(nome, salario, disciplina){
 
//     super (nome, salario);
//     this.disciplina; 
// }
// }
// apresentar(){
//     console.log(`${this.nome} ganha salário ${this.salario}
//         e ministra a disciplina de ${this.disciplina}`);
// }

class Pessoa{
    apresentar(){
        console.log("Sou um professor")
    }
}

class professor extends Pessoa{
    apresentar(){
        console.log("Sou um professor");
    }
}

class Aluno extends Pessoa{
    apresentar(){
        console.log
    }
}