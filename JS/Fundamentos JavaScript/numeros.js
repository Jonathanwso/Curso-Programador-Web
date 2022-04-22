const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //Se o valor for inteiro ele ira mostrar true ex: 1.0 caso o valor seja 1.1 ele ira mostrar false
console.log(Number.isInteger(peso2));

const avalicao1 = 9.871;
const avalicao2 = 6.871;

const total = avalicao1 * peso1 + avalicao2 * peso2;

const media = total /(peso1 + peso2)

console.log(media.toFixed(2)); // Usando o toFixed para mostrar somente 2 casas decimais
console.log(media.toString(2)); // converte em binário
console.log(media.toString()); // Usando o toString para converter um tipo number para o tipo String
console.log(typeof media);
console.log(typeof Number); //Função