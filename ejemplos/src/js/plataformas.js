// :Ejemplo 4.10. El profesor de la materia de Programacion para
// dispositivos moviles, desea hacer una encuesta con sus estudiantes
// para determinar sobre cual de dos posibles plataformas desarrollara las
// tematicas de este espacio academico. Las plataformas disponibles son
// Android e iOS, en caso de elegir una diferente se debe informar la situacion
// y no sera tenida en cuenta en los resultados. El profesor elegira la
// plataforma de mayor votacion; si se presenta un empate en la cantidad
// de votos, se usara otro mecanismo de eleccion.
// Cada estudiante debera digitar su codigo y su eleccion por una de las
// dos plataformas.


let message1 = document.querySelector(".message1");
let message2 = document.querySelector(".message2");
let message3 = document.querySelector(".message3");
let message4 = document.querySelector(".message4");
let message5 = document.querySelector(".message5");
let message6 = document.querySelector(".message6");
let message7 = document.querySelector(".message7");
let message8 = document.querySelector(".message8");
let message9 = document.querySelector(".message9");
let message10 = document.querySelector(".message10");
let message11 = document.querySelector(".message11");



message1.style.display = "none"
message2.style.display = "none"
message3.style.display = "none"
message4.style.display = "none"
message5.style.display = "none"
message6.style.display = "none"
message7.style.display = "none"
message8.style.display = "none"
message9.style.display = "none"
message10.style.display = "none"
message11.style.display = "none"



console.log(message10)

let inputCodigo = document.querySelector(".inputCodigo")
let enviar = document.querySelector(".enviar");
let votoSelect = document.getElementById("votoSelect")
let verResultado = document.querySelector(".verResultado")
let reiniciar = document.querySelector(".reiniciar")
let nombre = document.getElementById("nombre")

let codigo = 0;
let Android = 0;
let iOs = 0;
let dispositivo = ""
let NaNd = ""
// let limiteCodigo = ''


const selector = (event) => {
    dispositivo = event.target.value;
}
votoSelect.addEventListener("change", selector)

const capNombre = (event) => {
    const nom = /^[a-z A-Z.]+$/
    if (!nom.test(event.target.value)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1)
    }
    NaNd = event.target.value
}
nombre.addEventListener("input", capNombre)


const capInput = (event) => {
    const regex = /^[0-9.]+$/
    if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1)
    }
    if(event.target.value !== ""){
        codigo = parseInt(event.target.value);
    }else{
        codigo = 0
    }

    if (event.target.value.length > 8) {
        enviar.style.background = "#c0e3fd"
        message9.textContent = "no valido"
        message9.style.color = "red"
        // console.log(message9)
        enviar.disabled = true
    } else {
        enviar.disabled = false
        enviar.style.background = " #0341e9"
    }
}
inputCodigo.addEventListener("input", capInput)


const arrayVoto = [
]

console.log("primera ejecucion", Android)
console.log("ios ejecucion", iOs)

const calcular = () => {
    switch (dispositivo) {
        case "Android":
            if (codigo === "" || codigo === 0) {
                console.log(true)
                inputCodigo.style.border = "1px solid red"
                message7.style.display = "block"
                message7.textContent = "no puede estar vacio"
                message7.style.color = "red"
            }
            if (NaNd === "") {
                message10.textContent = "no valido"
                message10.style.display = "block"
                message10.style.color = "red"
                nombre.style.border = "1px solid red"
            }
            if (dispositivo === "") {
                votoSelect.style.borderColor = "red"
                verResultado.style.display = "none"
                message1.textContent = `La plataforma seleccionado no se encuentra`
                message1.style.color = "red"
                message1.style.display = "block"
                // enviar.disabled = true
            }
           
            if ((codigo === "" || codigo === 0) || NaNd === "" || dispositivo === "") {
                message11.textContent = "los campos estan vacio"
                message11.style.color = "red"
                message11.style.display = "block"
            } else {
                arrayVoto.push({ codigo: codigo, NaNd: NaNd, dispositivo: dispositivo })
            }
            break;

        case "iOs":
            if (codigo === "" || codigo === 0) {
                inputCodigo.style.border = "1px solid red"
                message7.style.display = "block"

                message7.textContent = "no puede estar vacio"
                message7.style.color = "red"
            }
            if (NaNd === "") {
                message10.textContent = "no valido"
                message10.style.display = "block"
                message10.style.color = "red"
                nombre.style.border = "1px solid red"
            }
            if (dispositivo === "") {
                votoSelect.style.borderColor = "red"
                verResultado.style.display = "none"
                message1.textContent = `La plataforma seleccionado no se encuentra`
                message1.style.color = "red"
                message1.style.display = "block"
                // enviar.disabled = true
            }
            if ((codigo === "" || codigo === 0) || NaNd === "" || dispositivo === "") {
            } else {
                arrayVoto.push({ codigo: codigo, NaNd: NaNd, dispositivo: dispositivo })
            }
            break;

        default:
            if (NaNd === "") {
                message10.textContent = "no valido"
                message10.style.display = "block"
                message10.style.color = "red"
                nombre.style.border = "1px solid red"
            }
            // console.log(NaNd)
            if (codigo === "" || codigo === 0) {
                inputCodigo.style.border = "1px solid red"
                message7.style.display = "block"

                message7.textContent = "no puede estar vacio"
                message7.style.color = "red"
            }
            if (dispositivo === "") {
                votoSelect.style.borderColor = "red"
                verResultado.style.display = "none"
                message1.textContent = `La plataforma seleccionado no se encuentra`
                message1.style.color = "red"
                message1.style.display = "block"
                // enviar.disabled = true
            }
            if ((codigo === "" || codigo === 0) || NaNd === "" || dispositivo === "") {
                message11.textContent = "los campos estan vacio"
                message11.style.color = "red"
                message11.style.display = "block"
                console.log(true)
            }
            break
    }
    if (arrayVoto.length > 0 && (codigo !== "" || codigo !== 0) && NaNd !== "" && dispositivo !== "") {
        verResultado.style.display = "block"
        console.log("ver resultadp", verResultado)

        inputCodigo.style.border = "1px solid #2f4fff"
        nombre.style.border = "1px solid #2f4fff"
        votoSelect.style.borderColor = "#2f4fff"
        message11.textContent = ""
        message1.textContent = ""
        message7.textContent = ""
        message10.textContent = ""
    }
    if (codigo === "" || codigo === 0) {
        verResultado.style.display = "none"
        inputCodigo.style.border = "1px solid red"
        message7.style.display = "block"

        message7.textContent = "no puede estar vacio"
        message7.style.color = "red"
    }
    enviar.style.display = "block"
    reiniciar.style.display = "none"
}

enviar.addEventListener("click", calcular)

const mostrarResultado = () => {
    Android = 0;
    iOs = 0;

    for (let i = 0; i < arrayVoto.length; i++) {
        console.log(arrayVoto[i]);
        if (arrayVoto[i].dispositivo === "Android") {
            Android = Android + 1
            console.log("Android", Android)
        }
        if (arrayVoto[i].dispositivo === "iOs") {
            iOs = iOs + 1
            console.log("iOs", iOs)
        }

    }
    if (arrayVoto.length > 0) {
        if (Android === iOs) {
            message6.textContent = `Hay empate`
            message6.style.display = "block"

        }
    }

    verResultado.style.display = "none"
    reiniciar.style.display = "block"
    enviar.style.display = "none"

    message2.textContent = `Votos por Android: ${Android}`;
    message2.style.display = "block"
    message3.textContent = `Votos por iOs: ${iOs}`
    message3.style.display = "block"



    if (Android > iOs) {
        message4.textContent = `Android gano`;
        message4.style.display = "block"
    } else if (Android < iOs) {
        message5.textContent = `iOs gano`
        message5.style.display = "block"
    }
    if (!arrayVoto.length > 0) {
        message8.textContent = "Aun no hay ganadores"
        message8.style.color = "red"
        message8.style.display = "block"

    }
}
verResultado.addEventListener("click", mostrarResultado)
reiniciar.style.display = "none"
verResultado.style.display = "none"

// const padre2 = document.querySelector(".padre2")
// padre2.style.display = "none"
const hijo2 = document.querySelector(".hijo2")
hijo2.style.display = "none"
const filter2 = document.querySelector(".filter2")
filter2.style.display = "none"

verResultado.addEventListener("click", () => {
    hijo2.style.display = "block"
    filter2.style.display = "block"
    hijo2.classList.add("activo")
})

reiniciar.addEventListener("click", () => {
    hijo2.style.display = "none"
    filter2.style.display = "none"
    hijo2.classList.remove("activo")

})

const recet = () => {
    message1.textContent = ""
    message2.textContent = ""
    message3.textContent = ""
    message4.textContent = ""
    message5.textContent = ""
    message6.textContent = ""
    message7.textContent = ""
    message8.textContent = ""
    message9.textContent = ""
    message10.textContent = ""
    message11.textContent = ""

    dispositivo = ""
    NaNd = ""
    codigo = 0

    inputCodigo.style.border = "1px solid #2f4fff"
    nombre.style.border = "1px solid #2f4fff"
    votoSelect.style.borderColor = "#2f4fff"
    nombre.value = ""
    inputCodigo.value = ""
    votoSelect.value = ""

    dispositivo = ""
    reiniciar.style.display = "none"
    verResultado.style.display = "none"
    enviar.style.display = "block"
}
reiniciar.addEventListener("click", recet)


