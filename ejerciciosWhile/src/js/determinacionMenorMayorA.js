// 5. Dada una poblacion, maximo de 500 habitantes, 
// determinar cuantos son mayores y cuantos menores de edad. De cada uno de ellos se conoce la edad en aÑos.


let edad1 = document.querySelector(".edad1")

let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")
let text5 = document.querySelector(".text5")



const resultado = document.querySelector(".resultado");
const restablecer = document.querySelector(".restablecer")
const enviar = document.querySelector(".enviar")
let contadorMayor
let contadorMenor
let edad = null;
let mayor = 0;
let menor = 0;


enviar.style.display = "block";
resultado.style.display = "none"
restablecer.style.display = "none"

const cap1 = (event) => {
    const regex = /^[0-9.]+$/
    if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1)
    }

    if (event.target.value.length > 2) {
        edad1.style.border = "1px solid red"
        enviar.disabled = true
        enviar.style.border = "1px solid red"
    } else {
        enviar.disabled = false
        edad1.style.border = "1px solid #8b58e4"
        enviar.style.border = "1px solid  #8b58e4"
    }

    edad = parseInt(event.target.value);

}
edad1.addEventListener("input", cap1);


let arrEdades = []

let arrMyr = []
let arrMnr = []

// envio de resultado++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const envrResult = () => {
    // arrEdades.sort(fun = (a,b) =>{return a-b})


    if (edad !== null) {
        arrEdades.push(edad)
    }else{
        arrEdades = []
    }
    // console.log("edad", edad)
    

console.log("arreglo edades",arrEdades.length)

arrMyr  = []
arrMnr = []
text2.innerHTML = ""
text1.innerHTML = ""

    for (let i = 0; i <= arrEdades.length-1; i++) {
        console.log("iterador",i)
        if (arrEdades[i] >= 18 & arrEdades[i] < 100) {
            // mayor = Math.max(arrEdades[i])
            arrMyr.push(arrEdades[i])
    
        }

        if (arrEdades[i] > 0 && arrEdades[i] < 18) {
            menor = Math.min(arrEdades[i])
            arrMnr.push(menor)
            
            
        }
        
    }
    

    text1.innerHTML = ""
// +++++++++++++++++++++++++++++++++++++++]resolver
console.log(arrMyr.length)

    for (let My = 0; My < arrMyr.length; My++) {
        console.log("mayor",arrMyr[My],My)
        text1.innerHTML += `edad mayor :${arrMyr[My]}<br/>`
    }
    // console.log("arrMayor", arrMyr)
    
    text2.innerHTML = ""
    for (let Mn = 0; Mn < arrMnr.length; Mn++) {
        console.log("menor",arrMnr[Mn])
        text2.innerHTML += ` edad menor :${arrMnr[Mn]}<br/>`
        
    }
    // console.log("arreglo padre", arrEdades)
    
    
    if (arrEdades.length > 0) {
        resultado.style.display = "block"
        // console.log("arr",arrEdades)
        text5.textContent = ""
    } else {
        text5.textContent = "los campos estan vacios"
        // console.log("el campo esta vacio")
        resultado.style.display = "none"
    }
    
    
    // restablecer.style.display = "none"
    // resultado.style.display = "block"
    
}
enviar.addEventListener("click", envrResult)


// resultado+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let index1 = 0;
// let index2 = 0;


const verResultado = () => {
    //    if(arrMyr.length > 0){
        //        for (let i = 0; i< arrMyr.length; i++) {
            //            console.log("recorridp de arrgelo mayor", arrMyr[i])
            //         }
            //     }
            text3.textContent = ` La cantidad de edades mayores son :${arrMyr.length}`
            // if(arrMnr.length > 0){
                //     for (let i = 0; i < arrMnr.length; i++) {
                    //         console.log("recorrido de arreglo menor", arrMnr[i])
    //     }
    // }
    text4.textContent = ` La cantidad de edades menores son :${arrMnr.length}`



    restablecer.style.display = "block"
    enviar.style.display = "block"
}
resultado.addEventListener("click", verResultado)



const reset = () => {
    edad1.value = ""
    edad = null;
    enviar.style.display = "block"
    restablecer.style.display = "none"
    resultado.style.display = "none"
    text1.textContent = "";
    text2.textContent = "";
    text3.textContent = "";
    text4.textContent = "";
    edad1.style.border = "1px solid #8b58e4"

    arrMnr = []
    arrMyr = []
    arrEdades = []
}
restablecer.addEventListener("click", reset)
