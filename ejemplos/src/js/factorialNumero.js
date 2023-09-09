// :Ejemplo 4.11. El factorial de un numero, es el producto obtenido al
// multiplicar un numero dado por todos los enteros positivos sucesivos
// inferiores. Ademas, se tiene establecido que los numeros negativos no
// poseen factorial y que el factorial de 0 es 1. El factorial se representa
// con un signo de exclamacion precedido de un numero (n!).
// Por ejemplo:
// 7! = 7 ∗ 6 ∗ 5 ∗ 4 ∗ 3 ∗ 2 ∗ 1 = 5040
// o se puede expresar como:
// 7! = 1 ∗ 2 ∗ 3 ∗ 4 ∗ 5 ∗ 6 ∗ 7 = 5040.
// A 7! se le denomina 7 factorial, tambien es llamado el factorial de 7.
// Teniendo en cuenta el anterior contexto, diseñe un algoritmo que calcule
// el factorial de un numero entero.

let inputNumero = document.querySelector(".inputNumero");
let btn = document.querySelector(".btn")

let numero = 0;
let factorial = 0;
let inferiores = 0;

const capturaNumero = (event)=>{
    numero = parseInt(event.target.value)
}
inputNumero.addEventListener("input",capturaNumero)

const result = () =>{

    if(numero < 0){
      console.log("no se puede calcular el factorial")
    
    }else{
        factorial = 1 ;
        inferiores = 1;
    
        do{
            factorial = factorial * inferiores;
            inferiores  = inferiores + 1
            console.log(inferiores)
        }while(inferiores <= numero){
            console.log("Fctorial de ",numero,"es",factorial)
        }
         
    }
}
btn.addEventListener("click",result)

