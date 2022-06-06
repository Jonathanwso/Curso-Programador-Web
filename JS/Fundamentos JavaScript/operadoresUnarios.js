let num1 = 1
let num2 = 2

num1++; //Soma +  1
console.log(num1);
--num1; // Subtrai - 1
console.log(num1);

console.log(++num1 === num2--); //Resultado verdadeiro devido ao ++ ser executado antes da comparação e o -- foi executado após a comparação +
                                //ou seja os dois estão com o mesmo tipo e valor tipo number com valor 1.
console.log(num1 === num2);