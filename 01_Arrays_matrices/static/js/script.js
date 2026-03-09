
console.log("Hola Mundo!")

//  Ejercicio 1: El Mensaje Desordenado (Push y Pop)
// Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
// Usa .push() para agregar "increíble" al final.
// Usa .push() para agregar "borrar" al final.
// Usa .pop() para eliminar "borrar".
// Muestra con alert() la frase unida por espacios

function construirFase() {
    let pal = ["programar ", "es "]
    pal.push("increíble")
    pal.push("borrar")
    let eliminada = pal.pop()
    alert(`El ${pal.join("")}.`)
    alert(`La palabra eliminada fue ${eliminada}`)
};

// Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
// Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
// Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
// El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
// Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".

function filaEspera() {
    let alumno = ["juan", "Maria", "Pedro"]
    alumno.unshift("Luis")
    let primerAlumno = alumn[0]
    alumno.shift("Luis")
    alert(`Entró ${primerAlumno} y la fila ahora es: ${alumno[0]}, ${alumno[1]}, ${alumno[2]}`)
};

// Ejercicio 3: Reordenando Números (Lógica de Índices)
// Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
// Accede al número 3 y súmale 2 directamente en la operación de concatenación.
// Construye la frase: "5 gatos negros duermen plácidamente".
// Muestra el resultado con alert().

function redondear() {
    let datos = [3, "gatos", "negros", "duermen"]
    datos[0] = datos[0] + 2;
    alert(`${datos[0]} ${datos[1]} ${datos[2]} ${datos[3]} placidamente`)
}

// Ejercicio 4: Coordenadas en la Matriz(Suma Simple)
// Instrucciones: En una función, define:
// JavaScript
// let matriz = [
//     [10, 20],
//     [30, 40]
// ];

// Accede al número 10 y al 40.
// Suma ambos valores y muestra el resultado con un alert() 
// que explique qué posiciones sumaste(ej: "Suma de [0][0] y [1][1]").

function javaScripts() {
    let matriz = [
        [10, 20],
        [30, 40]
    ]
    suma = matriz[0][0] + matriz[1][1];
    alert(`La suma de ${matriz[0][0]} mas ${matriz[1][1]} es igual que = ${suma}`)
}

// Ejercicio 5: El Intruso en la Tercera Dimensión
// Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];.
// Accede al número 4.
// Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
// Muestra la matriz completa en un alert().

function operarIntruso() {
    let datos = [1,
        [2, [3, 4]]
    ]
    datos[1][1][2] = datos.push = "5";
    alert(datos)
}

// Ejercicio 6: Traductor de Acciones (Matriz + Arreglo)
// Instrucciones: Define let sujetos = ["El programador", "La computadora"]; y una matriz let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];.
// Crea una función que tome a "El programador" y la acción "analiza".
// Concatena la frase y lánzala por alert().

function TraducirAcciones() {
    let sujetos = ["El programador ", "La computadora "];
    let verbos = [["codifica ", "analiza "], ["falla ", "reinicia "]];
    frase = sujetos[0] + verbos[0][1]
    alert(frase)
}

// Ejercicio 7: Limpieza de Datos (Pop y Unshift)
// Instrucciones: Tienes el arreglo let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];.
// Elimina el primer elemento ("Error") y el último ("Virus").
// Agrega "Monitor" al inicio.
// Muestra el inventario final con alert().

function limpiarDatos() {
    let inventario = ["Error", "Laptop", " Mouse", " Teclado", "Virus"];
    inventario.shift("Error");
    inventario.pop("Virus");
    inventario.push(" Monitor");
    alert(inventario)
}

// Ejercicio 8: La Matriz de Identidad Modificada
// Instrucciones: Define una matriz de 3x3 llena de ceros.
// JavaScript
// let tablero = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

// Cambia todos los ceros de la diagonal principal (superior izquierda a inferior derecha) por el número 1.
// Muestra el resultado de la fila central por alert().
// [0], [1][1], and [2][2]]

function matrizTrabajar() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1
    alert(tablero)
} 

// Ejercicio 9: El Consultorio Médico (Complejo)
// Instrucciones: Crea una función con un arreglo let pacientes = ["Ana", "Betto"];.
// Llegan dos pacientes más: "Carlos" y "Diana" (usa .push()).
// Atienden al primero (usa .shift()).
// Llega una urgencia: "Sonia" debe ser atendida de inmediato (usa .unshift()).
// Muestra cuántos pacientes quedan y quién es el siguiente en la lista.

function medico() {
    let pacientes = ["Ana", " Betto"];
    pacientes.push(" Carlos")
    pacientes.push(" Diana")
    pacientes.shift()
    pacientes.unshift(" Sonia")
    alert(`Pacientes en espera: ${pacientes}. siguiente paciente: ${pacientes[0]}`)
}

// Ejercicio 10: Extracción de Profundidad (Matriz 3x3x3)
// Instrucciones: Dada la siguiente estructura:
// JavaScript
// let caja = [
//   ["frutas", "verduras"],
//   [["manzana", "pera"], ["tomate", "lechuga"]]
// ];

// Accede a "pera" y a "lechuga".
// Crea una frase que diga: "En la canasta hay pera y lechuga".
// Muestra con alert().

function ejercicio10() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    alert(`En la canasta hay ${caja[1][0][1]} y ${caja[1][1][1]}`)
}