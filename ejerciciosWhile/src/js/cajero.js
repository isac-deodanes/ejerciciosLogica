/* 10. El cajero de un restaurante desea controlar el flujo de caja en un 
dia de trabajo cualquiera. Antes de abrir al publico, el gerente del
establecimiento le entrega la base para el dia, la cual consiste en una
suma de dinero que debe registrar en la caja y con la cual se espera
pueda desempeñarse sin contratiempos. Durante su jornada tendra
ingresos por concepto de las ventas que se realicen, tambien habran
salidas de caja para la compra de insumos o gastos eventuales que
deban realizarse.
Se espera un algoritmo, que reciba el registro de cada una de
las operaciones a medida que vayan sucediendo. El cajero tambien
requiere un informe del saldo en caja despues de cada registro. El
algoritmo debera dar un mensaje de alerta en el caso que el saldo sea
inferior o igual al 15 % de la base asignada. Al cierre del restaurante,
se requiere los saldos finales (saldo en caja, ingresos y egresos) y la
cantidad de cada una de las operaciones realizadas. */

let inputIngreso = document.querySelector(".inputIngreso")
let inputEgreso = document.querySelector(".inputEgreso")
let btnIng = document.querySelector(".btnIng")
let btnEgresos = document.querySelector(".btnEgresos")
let result = document.querySelector(".result")
let mySelect = document.getElementById("mySelect")

let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")
let text5 = document.querySelector(".text5")
let text6 = document.querySelector(".text6")




let ingreso = 0;
let egreso = 0;
// let saldoBase = 100;

const capIngreso = (event) => {
    ingreso = parseFloat(event.target.value)
}
inputIngreso.addEventListener("input", capIngreso)

const capEgreso = (event) => {
    egreso = parseFloat(event.target.value)
}
inputEgreso.addEventListener("input", capEgreso)


// let saldo = [100]
let saldo = 100;

let transsacciones = [];

let transsaccion = {
    monto: 0,
    saldo: saldo,
    tipoTranssaccion: "saldo-inicial",
}
transsacciones.push(transsaccion)
 
const funIngreso = () => {
    saldo = saldo + ingreso;
    
    transsaccion = {
        monto: ingreso,
        saldo: saldo,
        tipoTranssaccion: "ingreso",
    }
    transsacciones.push(transsaccion)
    // acumuladorIngrs = acumuladorIngrs + ingreso
    console.table(transsacciones, transsacciones[transsaccion])

}
btnIng.addEventListener("click", funIngreso)


const funEgresos = () => {
    let saldoEgreso = saldo - egreso
    
    
    if (saldoEgreso >= 50) {
        transsaccion = {
            monto: egreso,
            saldo: saldo = saldo - egreso,
            tipoTranssaccion: "egreso"
        }
        transsacciones.push(transsaccion)
        // acumuladorEgrs = acumuladorEgrs + egreso
        console.table(transsacciones)
        
    } else {
        console.log("no hay money")
    }
    
}
btnEgresos.addEventListener("click", funEgresos)

// text1.innerHTML = ""

const resultado = () => {
    
    let  textTranssaccionI = document.querySelector(".textTranssaccionI")
    let textTranssaccioE = document.querySelector(".textTranssaccionE")
    let textMontoI = document.querySelector(".textMontoI")
    let textMontoE = document.querySelector(".textMontoE")
    let textSaldoCajaI = document.querySelector(".textSaldoCajaI")
    let textSaldoCajaE = document.querySelector(".textSaldoCajaE")
    
    let textSumaI = document.querySelector(".textSumaI")
    let textSumaE = document.querySelector(".textSumaE")
    let contadorIngreso = document.querySelector(".contadorIngreso")
    let contadorEgreso = document.querySelector(".contadorEgreso")
    
    // textTranssaccion.textContent = `${transsaccion.}`


    let acumuladorIngrs = 0;
    let acumuladorEgrs = 0;

    let saldoCaja = transsacciones[transsacciones.length-1];

    let contador1 = 1;
    let contador2= 1;

    textTranssaccioE.innerHTML = ""
    textTranssaccionI.innerHTML = ""
    textMontoI.innerHTML = ""
    textMontoE.innerHTML = ""
    textSaldoCajaE.innerHTML = ""
    textSaldoCajaI.innerHTML = ""

    
    transsacciones.forEach((item) => {
        if (item.tipoTranssaccion === "ingreso") {
            acumuladorIngrs = acumuladorIngrs + item.monto
            // text1.innerHTML  += `${contador1}-monto ingreso:${item.monto}<br>`
            textTranssaccionI.innerHTML +=`${item.tipoTranssaccion}<br>`
            textMontoI.innerHTML += `${item.monto}<br>`
            textSumaI.textContent = ` ${acumuladorIngrs}`
            contadorIngreso.textContent = `${contador1}`
            contador1++
            textSaldoCajaI.innerHTML += `${item.saldo}<br>`
        }
        
        if(item.tipoTranssaccion === "egreso"){
            acumuladorEgrs = acumuladorEgrs + item.monto
            // text4.innerHTML += `${contador2}-monto egreso:${item.monto}<br>`
            textTranssaccioE.innerHTML += `${item.tipoTranssaccion}<br>`
            textMontoE.innerHTML += `${item.monto}<br>`
            textSumaE.textContent = `${acumuladorEgrs}`
            contadorEgreso.textContent = `${contador2}`
            contador2++
            textSaldoCajaE.innerHTML += `${item.saldo}<br>`
        }
        
        // text5.textContent = `Monto en egreso:${acumuladorEgrs}`
    })
    console.log("sald en vaja",saldoCaja)
    text6.textContent = `Saldo en caja:${saldoCaja.saldo}`

}
result.addEventListener("click", resultado)

const main2 = document.querySelector(".main2")
main2.style.display = "none"

result.addEventListener("click", () => {
    main2.style.display = "block"
    main2.classList.add("activo")
})

