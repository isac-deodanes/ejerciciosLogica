
// 6. Genere e imprima los multiplos de 3 que se encuentren entre 6 y n,
// donde n tiene que ser superior a 6.

const input1 = document.querySelector(".input1")
const enviar = document.querySelector(".enviar")
const restablecer = document.querySelector(".restablecer")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")
const text4 = document.querySelector(".text4")



let numeroLimite = NaN;
let multiplo = 0;

let ingresoInput = (event) => {
    numeroLimite = parseInt(event.target.value)
}
input1.addEventListener("input", ingresoInput)


const result = () => {

    //  }

    if (numeroLimite >= 6) {
        text4.textContent = ""
        text3.textContent = ""


        for (let i = 6; i <= numeroLimite; i++) {

            if (i % 3 === 0) {
                text1.textContent = `los numeros multiplos de tres que se encuentran dentro de ${numeroLimite} es:`
                text2.innerHTML += `${i}<br>`;
            }

        }

    }

    if (numeroLimite >= 0 && numeroLimite < 6) {
        text4.textContent = ""
        text3.textContent = "el numero ingresado es menor a 6"
        text3.style.color = "red"
        text1.textContent = ""
        text2.textContent = ""
        restablecer.style.display = "none"

    }else if (numeroLimite !== NaN) {
        text1.style.display = ""
        text2.style.display = ""
        text3.textContent = ""
        restablecer.style.display = "none"
        text4.textContent = "los campos estan vacios"
        text4.style.color = "red"
        
    } else {
        
        text3.textContent = ""
        restablecer.style.display = "none"
        enviar.style.display = "block"

        console.log("hola")
        // text3.textContent = ""
        // restablecer.style.display = "block"
    }
    if(numeroLimite > 6){
        text4.textContent = ""
        text3.textContent = ""
        restablecer.style.display = "block"

    }
}

enviar.addEventListener("click", result)

const reset = () => {
    numeroLimite = NaN;
    multiplo = 0;
    text1.textContent = ""
    text2.textContent = ""
    text3.textContent = ""
    input1.value = ""
    enviar.style.display = "block"
    restablecer.style.display = "none"

    text4.textContent = ""
    i = 0
}
restablecer.style.display = "none"
restablecer.addEventListener("click", reset)