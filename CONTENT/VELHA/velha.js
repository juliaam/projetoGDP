class Xo {
    constructor(C, L, Tabuleiro) {
        this.Col = C;
        this.Row = L;

        this.Tabuleiro = Tabuleiro

        this.Elemento = document.createElement("div")
        this.Elemento.setAttribute("class", "XO")
        this.Elemento.setAttribute("id", "XO_"+this.Col+this.Row)
        this.Elemento.addEventListener("click", this.Marcar.bind(this))  

        this.Marcado = false;
        this.ValorMarcado        

        this.vezXO = document.querySelector("#vezXO")

    }

    Marcar() {
       if (this.Marcado == false) {
            this.Elemento.innerHTML = this.vezXO.innerHTML
            this.ValorMarcado = this.vezXO.innerHTML
            this.Marcado = true
            this.Tabuleiro.Verificar()
            if (this.vezXO.innerHTML == "X") {this.vezXO.innerHTML = "O"}
            else if (this.vezXO.innerHTML == "O") {this.vezXO.innerHTML = "X"}

       } 
       


    }
    


}



class JogoDaVelha {

    constructor(Jogo) {
        this.Matriz = []
        this.Marcados = 0

        for (var C = 0; C < 3 ; C++) {
            var Coluna = []
            for (var L = 0; L < 3 ; L++) {
                Coluna.push(new Xo(C, L, this))
            }
            this.Matriz.push(Coluna)
        }

        for (var C = 0; C < 3 ; C++) {
            for (var L = 0; L < 3 ; L++) {
                Jogo.appendChild(this.Matriz[L][C].Elemento)
            }
        }
    }


    Verificar() {
        this.Marcados ++


        for (var X  = 0 ; X < 3 ; X++) {
            var essaCol = 0
            var essaRow = 0
            for (var Y = 0; Y < 3; Y ++) {
                if (this.Matriz[X][Y].Elemento.innerHTML == "X" && this.Matriz[X][Y].innerHTML != ""  ) {essaCol ++}
                else if(this.Matriz[X][Y].Elemento.innerHTML != "") {essaCol--}

                if (this.Matriz[Y][X].Elemento.innerHTML == "X" && this.Matriz[Y][X].innerHTML != ""  ) {essaRow ++}
                else if(this.Matriz[Y][X].Elemento.innerHTML != "") {essaRow--}


            }
            if ((essaCol == 3 || essaCol == -3) || (essaRow == 3 || essaRow == -3)) {
                console.log("Ganhou")
                if(essaRow == 3 || essaCol == 3 ) {var XouO = "X"}
                else {var XouO = "O"}        
                this.LimparTabuleiro(XouO)
                break

            }
            else  {
                var diag1 = [this.Matriz[0][0], this.Matriz[1][1], this.Matriz[2][2]]
                var diag2 = [this.Matriz[2][0], this.Matriz[1][1], this.Matriz[0][2]]

                var essaDiag1 = 0
                var essaDiag2 = 0
                for (var d = 0; d < 3; d++) {
                    if (diag1[d].Elemento.innerHTML == "X" && diag1[d].Elemento.innerHTML != "" ) {essaDiag1 ++}
                    else if(diag1[d].Elemento.innerHTML != "")  {essaDiag1--}
                    if (diag2[d].Elemento.innerHTML == "X" && diag2[d].Elemento.innerHTML != "" ) {essaDiag2 ++}
                    else if (diag2[d].Elemento.innerHTML != "") {essaDiag2--}

                }
                if ((essaDiag1 == 3 || essaDiag1 == -3) || (essaDiag2 == 3 || essaDiag2 == -3)) {
                    console.log("Ganhou")
                    if(essaDiag1 == 3 || essaDiag2 == 3 ) {var XouO = "X"}
                    else {var XouO = "O"}        
                    this.LimparTabuleiro(XouO)
                    break

                }

            }

            
            if(this.Marcados == 9) {
                this.LimparTabuleiro("VELHA")

            }

            console.log("Em Jogo")
            


        }
    }


    LimparTabuleiro (XouO) {
            var TelaDeVitoria = document.createElement("div")
            TelaDeVitoria.setAttribute("class", "TelaDeVitoria")
            if (XouO == "VELHA") {TelaDeVitoria.innerText = XouO }
            else {TelaDeVitoria.innerText = XouO + " WIN"}
            

            document.querySelector("#CaixaJogo").innerHTML = TelaDeVitoria.outerHTML
        setTimeout(()=> { 



            document.querySelector("#CaixaJogo").innerHTML = ""
            var CaixaJogo = document.querySelector("#CaixaJogo")
            new JogoDaVelha(CaixaJogo)
        
        }
            , 3000)
       
    }

}



var CaixaJogo = document.querySelector("#CaixaJogo")
new JogoDaVelha(CaixaJogo)













