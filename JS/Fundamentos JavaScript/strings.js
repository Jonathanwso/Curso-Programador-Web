const escola = "Cod3r"

console.log(escola.charAt(4)); //Ira retornar a letra R pois ela consta na posição 4
console.log(escola.charAt(5)); // Não ira retornar nada pois não consta nenhum valor na posição 5
console.log(escola.charCodeAt(3)); // Retonar o valor da tabela UNICODE
console.log(escola.indexOf('3')); //retornar o indice associado
console.log(escola.substring(1)); //Ira imprimir os dados da posição 1 ate a posição 4
console.log(escola.substring(0, 3)); // Ira imprimir os dados da posição 0 ate a posição 3 mas não ira imprimir o dado que consta na posição 3

console.log('Escola '.concat(escola).concat("!")); // Concatenação
console.log('Escola ' + escola + ("!")); // Concatenação
console.log(escola.replace(3, 'e')); // Ira substituir o dados que consta na posição 3 pela letra E.
console.log('Ana, Maria, Pedro'.split(',')); // Ira criar um array e separar os elementos por ,