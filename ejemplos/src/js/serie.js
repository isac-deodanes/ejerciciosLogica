// :Ejemplo 4.9. Dise˜ne un algoritmo que genere e imprima la siguiente
// serie: 1, 3, 5, 7, 9, 11, . . . , n

let captura1 = document.querySelector(".captura1");
let calcular = document.querySelector(".calcular");
let restablecer = document.querySelector(".restablecer")
let message = document.querySelector(".message")
let message2 = document.querySelector(".message2")

const capturaDatos = (event) => {
    cantidadTerminos = parseInt(event.target.value);
}
captura1.addEventListener("input", capturaDatos)


restablecer.style.display = "none"

let cantidadTerminos = 0;
let contadorNumeros = 0;
let termino = 1;

const calculoRespuesta = () => {

    if (cantidadTerminos > 0) {

        do {
            console.log("termino", termino, ",")
            termino = termino + 2
            contadorNumeros = contadorNumeros + 1;


        } while (contadorNumeros < (cantidadTerminos - 1))

        message.textContent = `el termino es :${termino}`
        console.log("termino", termino)
    } else {
        message2.textContent = "No puedes ingresar un numero negativo"
        message2.style.color = "red"
    }
    restablecer.style.display = "block"
    calcular.style.display = "none"
}

const restablecerRespuesta = () => {
    message.textContent = ""
    captura1.value = ""
    termino = 1
    cantidadTerminos = 0
    contadorNumeros = 0
    restablecer.style.display = "none"
    calcular.style.display = "block"
    message2.textContent = ""
}


calcular.addEventListener("click", calculoRespuesta);
restablecer.addEventListener("click", restablecerRespuesta)
