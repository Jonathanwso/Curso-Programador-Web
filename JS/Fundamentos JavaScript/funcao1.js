//Funcao sem retorno
// function imprimirSoma(a, b){
//     console.log(a + b);
// }
// imprimirSoma(5, 5)


//Funcao com retorno
function soma (a, b = 1){
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());