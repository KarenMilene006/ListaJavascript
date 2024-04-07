// 01 - Condição composta para verificar se está de dia ou de noite
let dia = true;
if (dia) {
    console.log('Claro');
} else {
    console.log('de noite');
}

// 02 - Loop for() que exiba apenas números pares até o 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 03 - Função que exibe uma mensagem no console
function exibirMensagem() {
    console.log('Olá, mundo!');
}

// 04 - Função que recebe o nome e o exibe no console
function exibirNome(nome) {
    console.log(nome);
}

// 05 - Função que recebe nome, idade, e estilo musical e exibe no console
function exibirPerfil(nome, idade, estiloMusical) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical: ${estiloMusical}`);
}

// 06 - Função que recebe um filme e uma música e os exibe no console
function exibirMidias(filme, musica) {
    console.log(`Filme: ${filme}, Música: ${musica}`);
}

// 07 - Função que retorna o triplo do número recebido
function triplo(numero) {
    return numero * 3;
}

// 08 - Função que verifica se uma variável é true ou false
function verificarBooleano(valor) {
    return valor ? true : false;
}

// 09 - Array com 5 itens exibidos no console
let itens = [1, 2, 3, 4, 5];
console.log(itens);

// 10 - Adiciona um nome ao início do array
itens.unshift('Nome');
console.log(itens);

// 11 - Remove o último nome do array
itens.pop();
console.log(itens);

// 12 - Adiciona dois nomes ao fim do array
itens.push('Nome1', 'Nome2');
console.log(itens);

// 13 - Remove o primeiro nome do array
itens.shift();
console.log(itens);

// 14 - Adiciona no meio do array
let nome = ["João", "Maria", "Jose", "Pedro"];
nome.splice(2, 0, 'NovoNome');
console.log(nome);

// 15 - Organiza em ordem crescente o array
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);
