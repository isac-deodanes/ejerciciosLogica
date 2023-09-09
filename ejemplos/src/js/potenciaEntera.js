
// ejemplo 7 .El siguiente ejemplo muestra un diagrama de flujo que calcula un potencia entera mediante sumas sucesivas.


let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let parrafo = document.querySelector(".parrafo");
let calcular = document.getElementById("calcular");
let resetiar = document.getElementById("resetiar")

resetiar.style.display = "none"

let base = 0;
let exponente = 0;
let contador1 = 0;
let potencia = 0;
let producto = 0;
let contador2 = 0;

const capturaNumero1 = (event) => {
    base = parseInt(event.target.value);
}
input1.addEventListener("input", capturaNumero1);

const capturaNumero2 = (event) => {
    exponente = parseInt(event.target.value);
}
input2.addEventListener("input", capturaNumero2);



const Resultado = () => {
    potencia = base;
    
    while (contador1 < (exponente - 1)) {
        producto = potencia;
        potencia = 0;
        contador2 = 0;
        
        while (contador2 < base) {
            potencia = potencia + producto;
            contador2 = contador2 + 1
        }
        
        contador1 = contador1 + 1;
    }
    parrafo.textContent = "La potencia de los numero ingresado es :" + potencia
    
    resetiar.style.display = "block"
    // calcular.style.display = "block"
    // potencia = 0
    // base = 0;
    producto = 0;
    contador1 = 0;
    contador2 = 0;
}

// calcular.style.display = "block"

const restablecer = () => {
    parrafo.textContent = ""
    input1.value = ""
    input2.value = ""
    resetiar.style.display = "none"
    // potencia = 0;
    // base = 0;
    producto = 0;
    contador1 = 0;
    contador2 = 0;
}
resetiar.addEventListener("click", restablecer)
// resetiar.style.display = "none"
calcular.addEventListener("click", Resultado);

