const formulario = document.querySelector(".formulario");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const cancion = document.querySelector("#cancion");
const mensaje = document.querySelector("#mensaje");

const datos = {
    nombre: "",
    email: "",
    telefono: "",
    cancion: "",
    mensaje: ""
};

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);
cancion.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const { nombre, email, telefono, cancion, mensaje } = datos;

    if (nombre === "" || email === "" || telefono === "" || cancion === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return;
    }

    if (!email.includes("@")) {
        mostrarAlerta("El correo debe contener @", "error");
        return;
    }

    mostrarAlerta("Mensaje enviado correctamente", "correcto");

    formulario.reset();

    datos.nombre = "";
    datos.email = "";
    datos.telefono = "";
    datos.cancion = "";
    datos.mensaje = "";
});

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
}

function mostrarAlerta(mensaje, tipo) {
    const alertaPrevia = document.querySelector(".alerta");

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("alerta");

    if (tipo === "error") {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    setTimeout(function () {
        alerta.remove();
    }, 3000);
}