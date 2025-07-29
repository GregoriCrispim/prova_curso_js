//1. Cálculo de Desconto Progressivo
let valorCompra = 500
let desconto = 0

if(valorCompra >= 1000){
    desconto = 0.2
}else if(valorCompra >= 500 && valorCompra < 1000){
    desconto = 0.1
}else{
    desconto = 0
}

let valorComDesconto = valorCompra - valorCompra * desconto

console.log(`Valor final: R$ ${valorComDesconto}`)

//2. Sistema de Pontos de Fidelidade
let categoria = 'Ouro'
let pontos = 0

switch(categoria){
    case 'Ouro':
        pontos = 20
        console.log(pontos)
        break

    case 'Prata':
        console.log(pontos)
        pontos = 15
        break

    case 'Bronze':
        pontos = 10
        console.log(pontos)
        break

    default:
        console.log('Categoria inválida.')
}

//3. Sequência de Fibonacci
let n1 = 0
let n2 = 1
let fibonacci

for(let i = 0; i < 10; i++){
    if(i == 0){
        console.log(n1)
    }else if(i == 1){
        console.log(n2)
    }else{
        fibonacci = n1 + n2
        console.log(fibonacci)
        n1 = n2
        n2 = fibonacci
    }
}

//4. Simulador de Bateria
let nivelBateria = 100
let hora = 0

while(nivelBateria >= 0){
    console.log(`${hora} Horas de uso - Nível da bateria: ${nivelBateria}`)
    nivelBateria -= 10
    hora++
}

console.log('Bateria esgotada')

//5. Função para Calcular Dias de Vida
function calcularDiasVida(idadeEmAnos){
    let diasVividos = idadeEmAnos * 365
    return diasVividos
}

let idade = 30
let diasDeVida = (calcularDiasVida(idade))

console.log(`Uma pessoa de ${idade} anos viveu aproximadamente ${diasDeVida} dias`)


//6. Virificador de Aprovação Escolar
let nota1 = 10
let nota2 = 10
let nota3 = 10
let nota4 = 10
let frequencia = 100
let media  = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 6 && frequencia >= 75){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

//7. Menor Número da Lista
let listaDeNumeros = [3, 6, 10, 17, 1, 9]
let numeroAtual = listaDeNumeros[0]

for(let numero of listaDeNumeros){
    if(numero > numeroAtual){
        numeroAtual = numero
    }
}

console.log(`O maior número do array é: ${numeroAtual}`)