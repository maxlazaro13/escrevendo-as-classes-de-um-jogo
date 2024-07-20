

// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada



// Bons estudos 😉



//==============================================================================================================================






// EU FIZ ÚLTILIZANDO ESTRURA DE DADOS CLASS E DANDO ORIENTAÇÕES NAS FUNÇÕPES E OBJETOS PARA FICAR MAIS DINAMICO. 





// class heroi {
//     constructor(nome, idade,tipo, arma){
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//         this.arma = arma
//     }

//     metodoAtacar (){
//         console.log(`O ${this.tipo} atacou usando a sua ${this.arma}`)
//     }

//     atacar (){
//         console.log(`O ${this.tipo} atacou a sua presa com ${this.arma}`)
//     }

// }

// let heroisAvante = new heroi("Fernando",28,"guerreiro", "espada")
// console.log(heroisAvante)
// heroisAvante.metodoAtacar()

// console.log("============================================")

// let heroisAvanteSempre = new heroi("Max lazaro",25,"mago", "magia") 
// console.log(heroisAvanteSempre)
// heroisAvanteSempre.atacar()


// console.log("============================================")


// heroisAvanteSempre = new heroi("Denis Pereira","34","monge", "artes marciais") 
// console.log(heroisAvanteSempre)
// heroisAvanteSempre.atacar()





// =====================================================================================================



// EU FIZ COM JSON PARA DESTAR OS MEUS CONHECIMENTOS. 


// let heroi = {
//     name: "André",
//     age: 26,
//     tipo: "guerreiro",
//     arma: "espada",
//     identicao: {
//         0: ["guerreiro", "espada"]
//     },

// };

// superHeroi(heroi)

// function superHeroi(heroi, tipo, arma, name, age, identicao) {
//     console.log(`O herói ${heroi.tipo} de apenas ${heroi.age} anos de idade que se chama ${heroi.name} atacou com sua ${heroi.arma} mas mesmo assim foi grave mente ferido e precisou dos seus poderes então ele ativou o seus poderes e pegou sua nova armadura de  
//     ${heroi.identicao} e sua nova ${heroi.identicao}}`)

//     for(let index in heroi.identicao){
//         let [novaArmadura, novaEspada] = heroi.identicao[index]
//         console.log(`${novaArmadura} ${novaEspada}`)
//     }
// }





// ===================================================================================================================================


// EU USEI O SWTCH-CASE PARA APERFEIÇOAR O MEU CONHECIMENTO.


// let name = "Fernando"
// let age = 33
// let tipo = "guerreiro"
// let arma = "espada"

// switch (tipo, arma,name,age) {
//     case tipo,arma:
//         console.log(`O ${tipo} atacou usando a sua ${arma}`)
//         break
//     case name, age:
//         console.log(`O ${tipo} se chama ${name} de ${age} anos de idade e ele atacou com a sua ${arma}.`)
//         break
// };






// // ========================================================================================================================











