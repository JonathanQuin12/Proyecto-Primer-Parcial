const imagenGaleria = document.querySelector("#imagen-galeria");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");

const imagenes = [
    "imagenes/galeria1.jpg",
    "imagenes/galeria2.jpg",
    "imagenes/galeria3.jpg",
    "imagenes/galeria4.jpg",
    "imagenes/galeria5.jpg",
    "imagenes/galeria6.jpg"
];

let imagenActual = 0;

botonSiguiente.addEventListener("click", function () {
    imagenActual++;

    if (imagenActual >= imagenes.length) {
        imagenActual = 0;
    }

    imagenGaleria.src = imagenes[imagenActual];
});

botonAnterior.addEventListener("click", function () {
    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1;
    }

    imagenGaleria.src = imagenes[imagenActual];
});