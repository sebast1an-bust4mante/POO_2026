// Ejercicio 1 
// function resaltar(elemento) {
//     elemento.style.backgroundColor = "#dff0ff";
// }

// function normal(elemento) {
//     elemento.style.backgroundColor = "white";
// }

// Ejercicio 2
// function validarFormulario(formulario) {
//     let correo = formulario.correo.value;

//     if (correo === "") {
//         document.getElementById("mensaje").textContent =
//             "El correo no puede estar vacío";
//         return false;
//     }

//     document.getElementById("mensaje").textContent =
//         "Formulario enviado correctamente";
//     return true;
// }



function click(input) {
    input.style.borderColor = "2px solid #00fc2a";
}

function noClick(input) {
    input.style.border = "2px solid #fc0000"
}

function validarForm(form) {
    let name = form.nombre.value;
    let edad = form.edad.value;
    
    if (name === "" || edad === "") {
        document.getElementById("mensajeForm").textContent = "Las entradas no pueden estar vacías.";
        return false;
    } else {
        document.getElementById("mensajeForm").textContent = "Registrado con éxito";
        form.reset();
        return true;
    };
};