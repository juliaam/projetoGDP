DivControleCaixa = document.querySelector('.ControleCaixa')
DivControleTexto = document.querySelector('.ControleTexto')
DivControle = document.querySelector('.Controle')


function ClickDiminuir() {
    DivControleTexto.style.transform = 'scale(0)'
    DivControle.style.transform = 'scale(1)'
}
function OutAumentar() {
    DivControleTexto.style.transform = 'scale(1)'
    DivControle.style.transform = 'scale(0)'
}


DivControleTexto.addEventListener('click', ClickDiminuir)
DivControleCaixa.addEventListener('mouseleave', OutAumentar)








