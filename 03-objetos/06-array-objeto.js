const aluno =[
    {nome: "Pedro", nota: 8},
    {nome: "Anna", nota: 5},
    {nome: "Juciardi", nota: 7},
    {nome: "Fernanda", nota: 2},
];
console.log(alunos);
console.log("==============");
const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log(aprovados);