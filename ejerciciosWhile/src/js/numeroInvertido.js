// 8. Lea un numero entero positivo, descompongalo en cada una de sus
// cifras y con ellas genere el numero invertido. Por ejemplo, si el numero
// a leer es el 5432, el resultado sera 2345.

const nI = document.querySelector(".nI")
const enviar = document.querySelector(".enviar")
const borrar = document.querySelector(".borrar")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")

let ingreso = 0;

const capInput = (event) => {

    const regex = /^[0-9.]+$/
    if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1)
    }
    ingreso = parseInt(event.target.value)

}
nI.addEventListener("input", capInput)

borrar.style.display = "none"

const result = () => {

    let numerosInvertidos = ingreso.toString().split("").reverse().join("");
    let numeroparse = parseInt(numerosInvertidos)

    console.log("numeros invertidos", numeroparse)
    enviar.style.display = "none"
    text1.textContent = `el numero invertido es:${numerosInvertidos}`
    borrar.style.display = "block"

    if (ingreso === 0 || isNaN(ingreso)) {
        console.log("campo vacio")
        borrar.style.display = "none"
        text1.textContent = ``
        text2.textContent = "compos vacios"
        text2.style.color = "red"
        enviar.style.display = "block"
        nI.style.border = " 1px solid red"

    } else {
        nI.style.border = " 1px solid blue"
        text2.textContent = ""
        borrar.style.display = "block"
        enviar.style.display = "none"
        text1.textContent = `el numero invertido es:${numerosInvertidos}`

    }

}
enviar.addEventListener("click", result)

const reset = () => {
    ingreso = 0;
    nI.value = ""
    enviar.style.display = "block"
    borrar.style.display = "none"
    text1.textContent = ""
    text2.textContent = ""
}
borrar.addEventListener("click", reset)