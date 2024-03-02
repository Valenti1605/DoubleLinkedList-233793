import { DoubleLinkedList } from "./DoubleLinkedList.js";

export class Playlist {
    constructor() {
        this.listaDeReproduccion = new DoubleLinkedList();
        this.reproduciendo = null;
    }

    agregarCancion(data) {
        this.listaDeReproduccion.agregar(data);
    }

    reproducirSiguienteCancion() {
        this.listaDeReproduccion.avanzar();
        this.reproducirCancionActual();
    }

    reproducirCancionAnterior() {
        this.listaDeReproduccion.retroceder();
        this.reproducirCancionActual();
    }

    reproducirCancionActual() {
        this.reproduciendo = this.listaDeReproduccion.obtenerValorActual();
    }

    obtenerNombreCancionActual() {
        return this.listaDeReproduccion.obtenerNombreActual();
    }
}
