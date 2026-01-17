//'Variaveis simples só podem guardar uma informação por vez'
//  Variaveis compostas seriam os vetores, através deles é possível agrupar um Nº x de conteúdos
//dentro de uma unica variavel. Agrupar um conjunto de informações dentro de um vetor é útil quando
//sabemos que teremos muitos dados para checar ou  guardar, chamamos isso de variavel composta.

//  Em um exemplo em que temnos uma varieval que guardar um número, se quisermos colocar mais um valor
//dentro dessa variavel, o conteúdo dentro dessa variavel será perdido e o novo será oq vai ficar no lugar
//Já uma variavel composta é uma variavel apenas e um novo conteúdo a ser inserido será adicionado no início
//ou no final (a depender do programador) e as localizações desses conteúdos são acessados a partir de um índice
// 0, 1, 2, 3, ... X esses índices são organizados a partir do 0 e são todos inteiros.

var numeros = [11, 23, 8, 100, 17]
console.log(`O conjunto numeros é  composto de \n${numeros} com ${numeros.length} números `)

//  Se eu quiser printar um conteúdo em específico eu devo usar o índice que representa o lugar onde esse conteúdo
//está salvo.
console.log(`O primeiro conteúdo dentro do vetor numeros é [${numeros[0]}]`)
console.log(`O terceiro conteúdo dentro do vetor numeros é [${numeros[2]}]`)
console.log(`O primeiro conteúdo dentro do vetor numeros é  do tipo [${typeof(numeros[0])}]`)

//  É possível acrescentar um novo conteúdo dentro do vetor a partir de um comando, exemplo... devemos perceber o valor
//do índice final e oq esse índice receberá, no vetor numeros nosso vetor tem 5 contepdios indo de 0 a 4 logo o índice 5
//não existe então podemos escrever numeros[5] = 99 assim o JS perceberá que o índice 5 não existe e ele criará um índice 5
//e colocará um valor 99 nessa posição
console.log(`O vetor numeros tem ${numeros.length} valores,\n são eles ${numeros}\n numero[5] = 99`)
numeros[5] = 99
console.log(`O vetor numeros agora tem ${numeros.length},\n e seus valores são ${numeros}`)
//  Também podemos usar o método '.push(...)' para adicionar um novo conteúdo dentro de um vetor
numeros.push(54)
console.log(`Adicionando um novo item a o vetor numeros usando o método .push(...)\nO vetor numeros é composto de [${numeros}]`)

//Reorganizando um vetor
//  É possível usar um método para reorganizar um vetor em ordem crescente (assim como no python tinhamos o .sort())
//  .sort() pode apresentar problemas caso seu vetor for de inteiros, essa forma antiga de construír um vetor organizado
//de forma crescente aparentemente duncionava quando o curso estava sendo lançado, mas agora é necessário passar uma informação
//no argumento para que ele entenda que esse vetor que esta prestes a ser manipulado se trata de um vetor de inteiros

console.log(`Usando o .sort() para reorganizar o vetor em ordem crescente ${numeros}`)
console.log(`.sort() com um vetor de inteiros\n${numeros}`)
numeros.sort()
console.log(`${numeros}`)
numeros.sort((a, b) => a - b) // Esse argumento é importante para que isso aconteça de forma correta
console.log(`Passando um argumento no .sort() para reorganizar o vetor de forma crescente\n ${numeros}`)

//Usando loop de for para acessar índices de um vetor
//  Ficou claro que o acesso é a partir de índices e se tivermos um vetor que muitas posições, podemos usar um loop
//de form para acessar e printar as informações dentro do vetor
console.log('Usando um loop de for para acessar cada posição dentro de um vetor')
for(var pos = 0; pos < numeros.length; pos++){
    console.log(`A posição [${pos}] do vetor numeros tem o conteúdo [${numeros[pos]}]`)
}
console.log('\nusando o for(... in ...){...} para acessar cada posição do vetor')
for(var pos in numeros){
    console.log(`posição: [${pos}] Conteúdo[${numeros[pos]}]`)
}


//podemos usar o 'IndexOf(...)' para encontrar um determinado conteúdo dentro do vetor
console.log(`O conteúdo "23" está na posição ${numeros.indexOf(23)} do vetor`)
console.log(`O conteúdo "100" está na posição ${numeros.indexOf(100)} do vetor`)
//caso esse conteúdo que está sendo procurado não existir ele retornará '-1' para o usuário
console.log(`O conteúdo "9999" está na posição ${numeros.indexOf(9999)} do vetor,\n esse valor não se encontra dentro do vetor\n`)
//caso houver mais do mesmo número dentro de um vetor podemos encontrar a última vez que eu determinado conteúdo
//aparece a partir da utilização de uma variação do comando mostrado acima, o  'lastIndexOf(...)'
numeros[6] = 11
console.log(`O conteúdo "11" aparece por último na posição ${numeros.lastIndexOf(11)} do vetor`)

