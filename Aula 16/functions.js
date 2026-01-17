//  Funções são aões que são executadas assim que são chamadas ou em decorrência de algum evento essas 
//mesmas podem ter parâmetros e retornar um resultado (isso não é regra)

//  Essa função não tem um argumento, então ela pode ser chamada sem passar nada nos parâmetros, e não
//possui um 'return' então ela só vai fazer oq ela tem que fazer, que é printar uma uma mensagem na tela
function print(){
    console.log('Ola mundo!')
}
//  Aqui nós dizemos que a função soma recebe dois parâmetros n1 e n2 que podem ser qualquer coisa, já que
//JS não é uma linguagem tipada, entretanto se passarmos duas strings ele tentará fazer oq tem que ser feito
//e talvez retorne um erro a depender. Por conta disso fazemos documentação para deixar tudo explicado para o 
//programador que estiver usando a função que criamos.
function soma(n1, n2){
    return n1 + n2
}

//  Em em alguns casos podemos criar funções que tem diversos parâmetros mas o usuário pode optar por não passar
//esses como argumentos... logo há algo que podedemos fazer quandi isso acontece.
//Assim como no python podemos passar um parâmetro como definido caso o usuário não entrar com um dado
function subtracao(n1 = 0, n2 = 0){ // definindo 0 como argumento base, o sistema vai considerar um 0 caso não haja entradas
    return(n1 - n2)
} 
