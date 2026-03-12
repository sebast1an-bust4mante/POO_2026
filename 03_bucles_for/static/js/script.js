console.log("js conectado...")

/*
1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=) 
el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo.
*/

function contadorPantalla() {
    let numeros = [];
    const container = document.getElementById('container1');
    const resultado = document.getElementById('result1');
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove('d-none');
}

/*
2. Lista de Asistencia Automática
Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío ("").
Usa un ciclo for para recorrer el arreglo. En cada iteración, agrega el nombre del estudiante al párrafo, separándolos por una coma y un espacio.
*/

function asistenciaAutomatica() {
    let curso = ["Ana", "Diego", "Sofia", "Matias"]
    const container = document.getElementById('container2');
    const resultado = document.getElementById('result2')
    for (let i = 0; i < curso.length; i++) {
        resultado.textContent += `${curso[i]},`
    }
    container.classList.remove(`d-none`)
}

/*
3. Buscador de Aprobados (Escala 1 a 7)
Tienes una lista con las notas finales de un curso: let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
Crea una variable contadorAprobados que inicie en 0.
Recorre el arreglo con un for. Si la nota es 4.0 o superior, suma 1 al contador.
Al terminar el ciclo, muestra en el párrafo pantalla: "Total de alumnos aprobados: [número]".
*/

function buscarAprobados() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    const container = document.getElementById('container3');
    const resultado = document.getElementById('result3');
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados++
        }
    }
}
resultado.textContent = "Total de alumnos aprobados: "+ contadorAprobados
container.classList.remove('d-none')

/*
4. El Filtro de Inventario
Una tienda quiere mostrar solo los productos que están disponibles.
let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
Recorre la lista con un ciclo for.
Si el producto es diferente de "Agotado" (!==), 
agrégalo al texto del párrafo pantalla. Si dice "Agotado", sáltalo.
*/