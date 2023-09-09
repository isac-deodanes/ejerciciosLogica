// 4. Dado los extremos de un intervalo [M, N], halle la sumatoria de los
// numeros pares y de los impares que pertenezcan a el.


const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const enviar = document.querySelector(".enviar")
const restablecer = document.querySelector(".restablecer")
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")

let numeroMax = 0;
let numeroMin = 0;
let acumuladorP = 0;
let acumuladorI = 0;

const captura1 = (event) =>{
 numeroMin = parseInt(event.target.value);
}
input1.addEventListener("input",captura1)

const captura2 = (event) =>{
    numeroMax = parseInt(event.target.value);
}
input2.addEventListener("input",captura2);

const result = () =>{

    while (numeroMin <= numeroMax) {
        if (numeroMin % 2 === 0) {
            acumuladorP = acumuladorP + numeroMin
            console.log("numeros pares",numeroMin)
            p2.textContent = "la suma de  numeros pares :"+acumuladorP
            console.log("suma numeros pares",acumuladorP)
        } else { 
            acumuladorI = acumuladorI + numeroMin
            console.log("numeros impares", numeroMin)
            p1.textContent = "la suma de  numeros impares :"+acumuladorI
            console.log("suma de numeros impares",acumuladorI)
        }
        numeroMin = numeroMin + 1
        
    }
    restablecer.style.display = "block"
    enviar.style.display = "none"
}
const restore = () =>{
    acumuladorI = 0;
    acumuladorP = 0;
    numeroMax = 0;
    numeroMin = 0;
    input1.value = ""
    input2.value = ""
    enviar.style.display = "block"
    restablecer.style.display = "none"
    p1.textContent =""
    p2.textContent = ""
}
restablecer.addEventListener("click",restore)
restablecer.style.display = "none"

enviar.addEventListener("click",result)
