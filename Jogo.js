const casa = document.getElementsByTagName('input')
const reiniciar = document.getElementById('reiniciar')
const player = document.getElementById('Jogador')
const label = document.getElementsByClassName('arrumar')

let contador = 0
let jogador = "_"
let vencedor = "_"

Sortear()

for(let i = 0; i<9; i++){
    
    casa[i].addEventListener('click', event =>{
        contador = (contador + 1)
        console.log(contador)
        if ((event.target.value == "_") && (vencedor == "_")) {
            
            event.target.value = jogador
            event.target.style.color = 'black'

            troca()
            vencedor = venceu()
            empate()
            if(vencedor != "_") {
                player.innerText = `${vencedor} Venceu!!!`
            }
        }
        
    })
    
} 
reiniciar.addEventListener('click', event =>{
    for(let x = 0; x<9; x++){
        casa[x].value = "_"
        casa[x].style.color = "white"
        casa[x].style.background = "white"
    }
    vencedor = "_"
    contador = 0
    Sortear()
})

function Sortear() {
        if(Math.floor(Math.random() * 2) == 0){
            jogador = "O"
            player.innerText = "O"
            player.style.color = "#cde0c9"
        }
        else{
        jogador = "X"
        player.innerText = "X"
        player.style.color = "#cde0c9"
        }
}

function troca(){
    
    if(jogador == "O"){
        jogador = "X"
        player.innerText = "X"
        player.style.color = "#cde0c9"
        
       
    }
    else{
        jogador = "O"
        player.innerText = "O"
        player.style.color = "#cde0c9"
       
    }
}
function empate(){
   if ((contador === 9) && (vencedor === "_")){
        player.innerText = "Empatou"
    }   
}


function venceu(){
 
    if((casa[0].value == casa[1].value) && (casa[1].value == casa[2].value) && (casa[0].value != "_")){
        return casa[0].value

    }else if((casa[0].value == casa[4].value) && (casa[4].value == casa[8].value) && (casa[0].value != "_")){
        return casa[0].value

    }else if((casa[0].value == casa[3].value) && (casa[3].value == casa[6].value) && (casa[0].value != "_")){
        return casa[0].value

    }else if((casa[2].value == casa[5].value) && (casa[5].value == casa[8].value) && (casa[2].value != "_")){
        return casa[2].value

    }else if((casa[2].value == casa[4].value) && (casa[4].value == casa[6].value) && (casa[4].value != "_")){
        return casa[2].value

    }else if((casa[1].value == casa[4].value) && (casa[4].value == casa[7].value) && (casa[1].value != "_")){
        return casa[1].value

    }else if((casa[6].value == casa[7].value) && (casa[7].value == casa[8].value) && (casa[6].value != "_")){
        return casa[6].value

    }else if((casa[3].value == casa[4].value)&& (casa[4].value == casa[5].value) && (casa[3].value != "_")){
        return casa[3].value

    }
        return "_"
}





 


