function iguaisOuNao(num1, num2) {
    let soma = num1 + num2
    if (num1 === num2 && soma < 10 && soma < 20) {
        console.log(`Os numeros ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
    } else if (num1 === num2 && soma >= 10 && soma < 20) {
        console.log(`Os numeros ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
    } else if (num1 === num2 && soma >= 10 && soma <= 20) {
        console.log(`Os numeros ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e igual a 20`);
    }
    else if (num1 != num2 && soma < 10 && soma <= 20) {
        console.log(`Os numeros ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
    } else if (num1 != num2 && soma >= 10 && soma <= 20) {
        console.log(`Os numeros ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
    } else {
        console.log('Digite um valor dentro do intervalo 10 - 20');
    }
}

iguaisOuNao(3, 3)
iguaisOuNao(3, 10)
iguaisOuNao(10, 10)
iguaisOuNao(15, 10)