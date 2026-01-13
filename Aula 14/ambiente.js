//  Estruturas de repetição são muito úteis para nossos sistemas e entender
//as variações nos ajudam a ter um leque de ferramentas para solucionar problemas

//Estrutura de repetição com variavel de controle, também conhecida como 'for'
//foi a primeira que eu conheci quando estudei C no primeirio semestre da faculdade
//e o que eu mais usei dês de então. Acho que são as mais simples de se entender no
//iniciio e agora com JS me aprece a mesma forma de se usar.
//  O 'for' são escritos da seguinte forma 'for(inicio; teste; incremento){...}'
// início = inicialização da variavel de controle
// teste = o teste lógico realizado pela estrutura (retornando True ou False)
// incremento = adiciona +1 a cada passagem pelo bloco de código
//  Gosto dessa estrutura porque a variavel de controle fica dentro do loop, assim
//a tornando uma variavel local, não global como a dos outros loops que estudamos antes
//pode parecer uma coisa boba, mas uma variavel local só ocupa espaço na memória enquanto 
//o resultado do teste lógico retornar True :D
console.log('Estrutura de repetição usando o "for"')
for(c = 1; c < 6; c ++){
    console.log(`Contador: ${c}`)
    console.log('Olá mundo!')
}
console.log(`Contador = ${c}, fim do programa`)
