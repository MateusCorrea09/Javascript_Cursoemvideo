//  Estrutura de condição são utilizadas em nossos códigos quando temos que realizar uma testagem
//de possibilidades, oq indicaria um desvio de percurso em nosso código, a depender das entradas
//determinados caminhos podem ser executados ou não.
//  Nessa aula vamos ver a estrutura de condição simples em que temos uma estrutura de 'checagem'
//que retorna um True u False a depender de uma checagem de um parâmetro, e a a realização de um
//determinado bloco de código caso for True ou False
console.log('Olá Mundo!')
//Faremos uma verificação simples se determinada condição dentro do 'if(...)' for verdadeira, um determinado
//bloco de código será executado, se não outro será executado no lugar


//Esse é um exemplo de uma condição simples, pois não possuí um bloco para o 'else' ou o 'Se não'
var velocidade = 60
console.log(`A velocidade do seu carro é ${velocidade}`)
if(velocidade >= 70) //Essa parte do código testa se essa a condição é verdadeira ou falsa
    {
        console.log(`Seu carro está acima da velodidade!`) //Se for verdadeira esse bloco será executado
    }
console.log('Dirija sempre usando cinto de segurança') // Esse bloco será executado independente do que acontecer