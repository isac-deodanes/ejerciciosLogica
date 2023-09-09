// 7. En 1937, el matematico aleman Lothar Collatz, enuncio la conjetura
// de Collatz, tambien conocida como el problema de Ulam, conjetura
// 3n + 1, entre otros.
// Collatz enuncio que, a partir de cualquier numero natural, siempre
// se obtiene la unidad. Para ello se hace el siguiente procedimiento:

// Tome un numero n y ejecute las siguientes operaciones:
// Si n es par, halle la division entera entre 2. Si n es impar,
// multiplıquelo por 3 y sumele 1.
// Con el resultado que obtenga, repita las operaciones anteriores, hasta
// obtener 1 como respuesta. Ejemplos:
// n = 13, se obtienen los siguientes resultados:
// 40, 20, 10, 5, 16, 8, 4, 2, 1.
// n = 6, se obtienen los siguientes resultados:
// 3, 10, 5, 16, 8, 4, 2, 1.
// Otra de las curiosidades de esta conjetura, es que cuando se llegue a
// 1 y se apliquen nuevamente las formulas, obtendra la secuencia 4, 2,
// 1 de forma infinita.
// El algoritmo que Usted dise˜ne, debe solicitar un numero y aplicar el
// anterior concepto, imprimiendo los resultados que se obtienen hasta
// llegar a la unidad.

const ingreso = document.querySelector(".ingreso");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const enviar = document.querySelector(".enviar")
const borrar = document.querySelector(".borrar")


let numeroIngresado = 0;

const captura = (event) =>{
    numeroIngresado = parseInt(event.target.value)
    console.log("numero ingrresado",numeroIngresado)


    if(numeroIngresado === 0 || isNaN(numeroIngresado)){
       enviar.disabled = true
    }else{
        enviar.disabled = false
    }
}
ingreso.addEventListener("input",captura)


const result = () => {
            console.log("result",numeroIngresado)


        function fun (parametro)  {
                
                if (parametro === 1) {
                    return 1
                    }
                    
                    if (parametro % 2 === 0) {
                        parametro = parametro / 2
                        console.log(parametro)
                        return parametro
                    } else {
                        parametro = 3 * parametro + 1
                        console.log(parametro)
                        return parametro
                    }
        }
                if(numeroIngresado !== 0 ){
                    
                    while (numeroIngresado !== 1){
                        numeroIngresado = fun(numeroIngresado)
                        console.log("fun", numeroIngresado)
                        text1.innerHTML += `${numeroIngresado}<br>`
                    }

                }
                
            
}
 enviar.addEventListener("click",result)


const eliminar = () =>{
    numeroIngresado = 0;
    ingreso.value = "";
    text1.textContent = ""

}
borrar.addEventListener("click",eliminar)
// let numeroIngresado = 0



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
// while (numeroIngresado !== 1){
    
    //     if (numeroIngresado === 1) {
        //         numeroIngresado = 1
//     }

//     if (numeroIngresado % 2 === 0) {
//         numeroIngresado = numeroIngresado / 2
//         // return numeroIngresado

//     } else {
//         numeroIngresado = 3 * numeroIngresado + 1
//         // return n
//     }

//     // numeroIngresado = fun(numeroIngresado)
//     console.log("secuencia", numeroIngresado)
// }

