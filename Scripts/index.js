
const $buttonPedraJogador1 = document.querySelector('.button-pedra-jogador-1')
const $buttonPapelJogador1 = document.querySelector('.button-papel-jogador-1')
const $buttonTesouraJogador1 = document.querySelector('.button-tesoura-jogador-1')
const $campoJogador1 = document.querySelector('.campo-jogador-1')
const $contadorJogador1=document.querySelector('.contador-jogador-1')

const $buttonPedraJogador2 = document.querySelector('.button-pedra-jogador-2')
const $buttonPapelJogador2 = document.querySelector('.button-papel-jogador-2')
const $buttonTesouraJogador2 = document.querySelector('.button-tesoura-jogador-2')
const $campoJogador2 = document.querySelector('.campo-jogador-2')
const $contadorJogador2=document.querySelector('.contador-jogador-2')
const $buttonIniciar = document.querySelector('.button-iniciar')
const $butoonResetar = document.querySelector('.button-resetar')

let movePlayer1 = ''
let movePlayer2 = ''
let iniciar= false

function somaJogador2(number){
    console.log
    $contadorJogador2.innerHTML=(number+01)
    
    
    }

function soma(number){
console.log
$contadorJogador1.innerHTML=(number+01)


}
function resetButton(){
    $campoJogador1.innerHTML = ''
    $campoJogador2.innerHTML = ''
    movePlayer1 = ''
    movePlayer2 = ''
    $contadorJogador2.innerHTML='0'
    $contadorJogador1.innerHTML='0'
}


function reset() {
    $campoJogador1.innerHTML = ''
    $campoJogador2.innerHTML = ''
    movePlayer1 = ''
    movePlayer2 = ''
}

function verifyWinner() {
    if (movePlayer1 == movePlayer2) {

        setTimeout(function () {
            alert('empatou')
            reset()

        }, 100)
        
    }

else if (movePlayer1 == 'pedra' && movePlayer2 == 'tesoura') {
    setTimeout(function () {
        
        reset()
        
    }, 100)
    soma(0)
    }
    else if (movePlayer1 == 'pedra' && movePlayer2 == 'papel') {
        setTimeout(function () {
            
            reset()

        }, 100)
somaJogador2(0)
    }

    else if (movePlayer1 == 'tesoura' && movePlayer2 == 'papel') {
        setTimeout(function () {
            
            reset()

        }, 100)
        soma(0)
    }
    else if (movePlayer1 == 'papel' && movePlayer2 == 'pedra') {
        setTimeout(function () {
            
            reset()

        }, 100)
        soma(0)
    }

    else if (movePlayer2 == 'tesoura' && movePlayer1 == 'papel') {
        setTimeout(function () {
            
            reset()

        }, 100)
        somaJogador2(0)
    }
    else if (movePlayer2 == 'pedra' && movePlayer1 == 'tesoura') {
        setTimeout(function () {
            
            reset()

        }, 100)
        somaJogador2(0)
    }
}
 
$buttonIniciar.addEventListener('click',function(){
iniciar = true

})

$buttonPedraJogador1.addEventListener('click', function () {
    if(iniciar== false) {
        return
    }
    
    movePlayer1 = 'pedra'
    $campoJogador1.innerHTML = '<img src = "./images/pedra.jpeg ">'
    verifyWinner()
    console.log(movePlayer1)

    
})
$buttonPapelJogador1.addEventListener('click', function () {
    if(iniciar== false) {
        return}
    movePlayer1 = 'papel'
    $campoJogador1.innerHTML = '<img src = "./images/papel.jpeg ">'
    verifyWinner()
    console.log(movePlayer1)


})
$butoonResetar.addEventListener('click',function(){
resetButton()

})
$buttonTesouraJogador1.addEventListener('click', function () {
    if(iniciar== false) {
        return}
    movePlayer1 = 'tesoura'
    $campoJogador1.innerHTML = '<img src = "./images/tesoura.jpeg ">'
    verifyWinner()
    console.log(movePlayer1)

})

$buttonPedraJogador2.addEventListener('click', function () {
    if(iniciar== false) {
        return}
   movePlayer2='pedra'
        $campoJogador2.innerHTML = '<img src = "./images/pedra.jpeg ">'
    verifyWinner()
    console.log(movePlayer2)

})
$buttonPapelJogador2.addEventListener('click', function () {
    if(iniciar== false) {
        return}
    movePlayer2 = 'papel'
    $campoJogador2.innerHTML = '<img src = "./images/papel.jpeg ">'
    verifyWinner()
    console.log(movePlayer2)

})
$buttonTesouraJogador2.addEventListener('click', function () {
    if(iniciar== false) {
        return}
    movePlayer2 = 'tesoura'
    $campoJogador2.innerHTML = '<img src = "./images/tesoura.jpeg ">'
    verifyWinner()
    console.log(movePlayer2)

})





