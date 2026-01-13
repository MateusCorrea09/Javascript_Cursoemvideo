//  Estrutura de repetição ou laço de repetição são estruturas que nos permitem realizar testes
//lógicos e a partir od retorno True um determinado bloco de codigo será repetido uma quantidade
//N de vezes, esse nº depende do retorno True, são muito úteis para quando nós não sabemos o nº
//de vezes em que teremos que executar uma determinada tarefa.

//  Em um exemplo prático podemos imaginar que seja necessário criar um programa que exiba uma
//mensagem na tela uma quantia de vezes, no entanto colocar um print na tela 100x é uma grande
//perda de tempo! para isso usaremos o while(){...}

var c = 1 //Criamos inicialmente uma variavel que ficará responsável por armazenar o nº de vezes em que o loop foi realizado, podemos chama-la de 'contador'
console.log('Estrutura de repetição com teste lógico no inicio!')
while (c < 6){ 
    console.log('Olá mundo!')
    console.log(`Contador: ${c}`)
    c++ // c = c + 1
}
console.log(`O contador chegou a ${c}, fim do programa!`)

console.log('\nEstrutura de repetição com teste lógico no fim (do{} while())')
c = 0
do{
    console.log('Olá mundo!')
    console.log(`Contador: ${c}`)
    c++
}while(c < 6)
//   Eu acredito que são estruturas essênciais para entender do inicio da jornada de programação

