//Resolução 1
// function maiorOuIgual(numero1, numero2){
//     if (numero1 === numero2) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// maiorOuIgual(2, "2")
// maiorOuIgual(2, 2)
// maiorOuIgual(2, 5)

//Resolução 2

function maiorOuIgual(numero1, numero2){
    if (typeof numero1 != typeof numero2) return false
        
    
    return numero1 >= numero2
}
console.log(maiorOuIgual(2, 2));
console.log(maiorOuIgual(2, "2"));
console.log(maiorOuIgual(2, 5));
