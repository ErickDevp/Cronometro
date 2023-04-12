let minutos = document.querySelector(".minutos")
let segundos = document.querySelector(".segundos")
const buttonStop = document.querySelector(".stop") 
const buttonPausar = document.querySelector(".pausar")
const buttonPlay = document.querySelector(".play")
const modTempo = document.querySelector(".tempo")
let isPaused = false;
let intervalId;
let antSegundos;
let antMinutos;
let newSegundos;
let newMinutos;

inciar()

buttonPlay.addEventListener("click", () => {
    cronometro()
    pausarReturn()
    if(isPaused) {
        pausarCronometro()
    }
})

buttonStop.addEventListener("click", () => {
    playReturn()
    clean()

})

buttonPausar.addEventListener("click", () => {
    pausarCronometro()
    playReturn()
})

modTempo.addEventListener("click",modifTempo)

function cronometro() {

    intervalId = setInterval(() => { 

        if( newMinutos == 0 && newSegundos == 0){
            clean()
            playReturn()
            return
        } 

        minutos.innerText = newMinutos.toString().padStart(2, "0");
        segundos.innerText = newSegundos.toString().padStart(2, "0");
        
        newSegundos--;

        if (newSegundos < 0 && newMinutos > 0) {
            newSegundos = 59;
            newMinutos--;
        }

    }, 1000);
}

function inciar() {
    modifTempo()

    minutos.innerText = newMinutos.toString().padStart(2, "0");
    segundos.innerText = newSegundos.toString().padStart(2, "0");
    
}

function pausarCronometro() {
    if (!isPaused) {
        clearInterval(intervalId);
        antSegundos = newSegundos
        antMinutos = newMinutos
        isPaused = true;
    } else {
        isPaused = false;
        newSegundos = antSegundos
        newMinutos = antMinutos
    }

}

function pausarReturn() {
    buttonPlay.classList.add("hidden")
    buttonPausar.classList.remove("hidden")
}

function playReturn() {
    buttonPausar.classList.add("hidden")
    buttonPlay.classList.remove("hidden")
}

function clean() {
    clearInterval(intervalId);
    newMinutos = 00
    newSegundos = 00
    minutos.innerText = newMinutos.toString().padStart(2, "0");
    segundos.innerText = newSegundos.toString().padStart(2, "0");

}

function modifTempo() {

    newMinutos = prompt("Minutos")
    newSegundos = prompt("Segundo")

    if (newSegundos > 59) {
        let excessoSegundos = newSegundos - 59
        newSegundos = newSegundos - excessoSegundos
    }
    
    if (!newMinutos || !newSegundos || isNaN(newMinutos) || isNaN(newSegundos)){
        newMinutos = 00
        newSegundos = 00
        alert("[ERROR] - Apenas numeros")
    } else {
        minutos.innerText = newMinutos.toString().padStart(2, "0");
        segundos.innerText = newSegundos.toString().padStart(2, "0");
    }


}

