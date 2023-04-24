DivHora = document.querySelector('.Hora')

function HoraAtualizada() {
    
    var Data = new Date()

    var Hora = Data.getHours()
    var Minuto = Data.getMinutes()
    var Segundo = Data.getSeconds()

    const fHora    = Hora.toString().padStart(2, '0')
    const fMinuto  = Minuto.toString().padStart(2, '0')
    const fSegundo = Segundo.toString().padStart(2, '0')


    DivHora.innerText = fHora + ':' + fMinuto + ':' + fSegundo

}

setInterval(HoraAtualizada, 1000)



