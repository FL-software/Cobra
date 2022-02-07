
let palco = document.getElementById('palco')
let contexto = palco.getContext("2d")
const velocidade = 1
let direcao = "parado"
let velocidadeX = 0
let velocidadeY = 0
let tamanhoPeca = 20
let quantidadePeca = 20
let posicaoX = Math.floor(Math.random() * quantidadePeca)
let posicaoY = Math.floor(Math.random() * quantidadePeca)
let macaX = Math.floor(Math.random() * quantidadePeca)
let macaY = Math.floor(Math.random() * quantidadePeca)
let trilha = []
let cauda = 5

window.onload = function() {
    document.addEventListener("keydown",movimento)

    setInterval(jogo, 80)
    
    function jogo() {
        posicaoX += velocidadeX
        posicaoY += velocidadeY

        if (posicaoX < 0) {
            posicaoX = quantidadePeca - 1
        }

        if (posicaoX > quantidadePeca - 1) {
            posicaoX = 0
        }

        if (posicaoY < 0) {
            posicaoY = quantidadePeca - 1
        }

        if (posicaoY > quantidadePeca - 1) {
            posicaoY = 0
        }

        contexto.fillStyle = "black"
        contexto.fillRect(0, 0, palco.width, palco.height)
        
        contexto.fillStyle = "#c21296"
        contexto.fillRect(macaX * tamanhoPeca, macaY * tamanhoPeca, tamanhoPeca, tamanhoPeca)
        
        contexto.fillStyle = "#e6e1b6"

        for (var i = 0; i < trilha.length; i++)
        {
            contexto.fillRect(trilha[i].x * tamanhoPeca, trilha[i].y * tamanhoPeca, tamanhoPeca - 1, tamanhoPeca - 1)

            if (cauda > 5 && trilha[i].x == posicaoX && trilha[i].y == posicaoY) {
                velocidadeX = velocidadeY = 0
                alert('Você perdeu!')
                posicaoX = Math.floor(Math.random() * quantidadePeca)
                posicaoY = Math.floor(Math.random() * quantidadePeca)
                macaX = Math.floor(Math.random() * quantidadePeca)
                macaY = Math.floor(Math.random() * quantidadePeca)
                cauda = 5
                direcao = "parado"
            }
        }

        trilha.push({x: posicaoX, y: posicaoY})

        while (trilha.length > cauda) {
            trilha.shift()
        }

        if (macaX == posicaoX && macaY == posicaoY) {
            cauda++;
            macaX = Math.floor(Math.random() * quantidadePeca)
            macaY = Math.floor(Math.random() * quantidadePeca)
        }
    }

    function movimento(event) {
        switch (event.keyCode){
            case 37: //esquerda
                moverEsquerda()
                break
            case 38: //cima
                moverCima()
                break
            case 39: //direita
                moverDireita()
                break
            case 40: //baixo
                moverBaixo()
                break
            default:
                break
        }
    }
}

function moverEsquerda(){
    if (direcao != "direita")
    {
        direcao = "esquerda"
        velocidadeX =- velocidade
        velocidadeY = 0
    }
}

function moverCima(){
    if (direcao != "baixo")
    {
        direcao = "cima"
        velocidadeX = 0
        velocidadeY =- velocidade
    }
}

function moverDireita(){
    if (direcao != "esquerda")
    {
        direcao = "direita"
        velocidadeX = velocidade
        velocidadeY = 0
    }
}

function moverBaixo(){
    if (direcao != "cima")
    {
        direcao = "baixo"
        velocidadeX = 0
        velocidadeY = velocidade
    }
}

function reiniciar() {
    window.location.reload();
}