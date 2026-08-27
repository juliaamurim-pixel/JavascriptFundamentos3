// function somar(a,b){
//     return a + b;
// }

// const resultado = somar (15, 30)

// console.log(resultado);

// console.log(somar(7, 9));

// let ligado = false;

// function ligarDesligar(){
//     if(ligado === false){
//         ligado = true;
//         return "ligado"
//     }else{
//         ligado = true;
//         return "desligado"
//     }
// }
// console.log(ligarDesligar());
// console.log(ligarDesligar());
let botao = true;
function ligarDesligar(){
    botao = !botao
    return botao ? "ligado" : "Desligado"
}
console.log(ligarDesligar());
console.log(ligarDesligar());