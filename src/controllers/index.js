import { playlist } from "./dependencies.js";

const antes = document.getElementById("btPrev");
const después = document.getElementById("btNext");

antes.addEventListener("click", function () {
    playlist.retroceder();
    actualizarReproductor();
});

después.addEventListener("click", function () {
    playlist.avanzar();
    actualizarReproductor();
});

function actualizarReproductor() {
    const reproductor = document.getElementById("reproductor");
    const nombreCancion = document.getElementById("nombreCancion");
    const audioActual = playlist.obtenerValorActual();
    if (audioActual !== null) {
        reproductor.src = audioActual;
        nombreCancion.textContent = playlist.obtenerNombreActual();
        reproductor.play();
    } else {
        reproductor.pause();
    }
}

playlist.iniciarReproduccion();
actualizarReproductor();
