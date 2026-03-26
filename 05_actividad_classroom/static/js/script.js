/* Ejercicio 1: Función con validación de datos
Objetivo: Validar entradas antes de procesarlas.

Instrucciones:

Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente"
*/
function verificarNumero() {
    const input = document.getElementById("input1");
    const result = document.getElementById("result1");
    const container = document.getElementById("container1");
    let numero = parseInt(input.value);
    if (isNaN(numero) >= 1) {
        result.textContent = "Debes ingresar un número"
    } else if (isNaN(numero) <= 1) {
        result.textContent = "Número ingresado correctamente"
    } else {
        result.textContent = "Error"
    }
    container.classList.remove("d-none");
};
//-------------------------------------------------------------------
/* Ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.

Instrucciones:

Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más
*/
function evaluarNota() {
    const input = document.getElementById("input2");
    const result = document.getElementById("result2");
    const container = document.getElementById("container2");
    let nota = parseInt(input.value);
    if (nota < 4) {
        result.textContent = "Reprobado"
    } else if (nota >= 4 && nota <= 5.9) {
        result.textContent = "Aprobado"
    } else if (nota >= 6) {
        result.textContent = "Sobresaliente"
    } else {
        result.textContent = "Coloca una nota valida"
    }
    container.classList.remove("d-none");
}
//-------------------------------------------------------------------
/* Ejercicio 3: Uso de múltiples funciones (flujo completo)
 Objetivo: Integrar varias funciones con roles distintos.

 Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

 function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y
Sugerencia didáctica (para tu clase)

Puedes usar estos ejercicios como:

Trabajo en parejas (uno codifica, otro revisa)
Ticket de salida (Ejercicio 5 o 6)
Evaluación formativa (Ejercicio 8)
*/
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}

function procesarNumero() {
    const input = document.getElementById("input2");
    const result = document.getElementById("result2");
    const container = document.getElementById("container2");
    let numero = parseInt
}


//-------------------------------------------------------------------
// Ejercicio 4: Función que transforma texto
// Objetivo: Manipular strings desde un input.

// Instrucciones:

// Crea un input para ingresar un texto.
// Crea una función transformarTexto.
// La función debe:
// Capturar el texto
// Convertirlo a mayúsculas (toUpperCase())
// Mostrar el resultado en un <div>

// Ejemplo esperado:

// Entrada: hola mundo
// Salida: HOLA MUNDO