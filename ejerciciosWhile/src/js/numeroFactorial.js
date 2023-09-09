// 9. Dado un numero menor o igual a 50, calcule su factorial mediante
// sumas sucesivas.

const enviar = document.querySelector(".enviar")
const borrar = document.querySelector(".borrar")
const ingNumero = document.querySelector(".ingNumero")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")
const text4 = document.querySelector(".text4")


// text1.style.display = "none"

let numDado = 0;
let factorial = 1;
const capturaInput = (event) => {
    numDado = parseInt(event.target.value)
}
ingNumero.addEventListener("input", capturaInput)


const datos = () => {
    
    // text2.innerHTML = ""
    if (numDado <= 50) {
        for (let i = 1; i <= numDado; i++) {
            factorial = factorial * i
            
            text1.style.display = "block"
            text1.textContent = `el factorial del numero ${numDado} es:`
            text1.style.background = "#ffffff"
            text2.innerHTML += `${factorial}<br>`
        }
        
    } else {
        text3.textContent = `el numero es mayor a 50`
    }
    // borrar.style.display = "block"
    // enviar.style.display = "none"

    if(numDado === 0 || isNaN(numDado)){
        ingNumero.style.border = "1px solid red"
        text4.textContent = "campos vacios"
        text4.style.color = "red"
        borrar.style.display = "none"
        enviar.style.display = "block"
    }else{
        ingNumero.style.border = "1px solid aqua"
        text4.textContent = ""
        borrar.style.display = "block"
        enviar.style.display = "none"
    }

}
enviar.addEventListener("click", datos)
borrar.style.display = "none"

const reset = () => {
    text1.textContent = ""
    text2.textContent = ""
    text3.textContent = ""
    factorial = 1;
    numDado = 0;
    enviar.style.display = "block"
    borrar.style.display = "none"
    ingNumero.value = ""
    text1.style.background = "none"
    
}
borrar.addEventListener("click", reset)