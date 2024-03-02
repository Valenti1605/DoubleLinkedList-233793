import { Node } from "./Node.js";

export class DoubleLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    agregar(data) {
        const node = new Node(data);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    avanzar() {
        if (this.current !== null && this.current.next !== null) {
            this.current = this.current.next;
        }
    }

    retroceder() {
        if (this.current !== null && this.current.prev !== null) {
            this.current = this.current.prev;
        }
    }

    obtenerValorActual() {
        if (this.current !== null) {
          return this.current.data;
        } else {
          return null;
        }
      }

      obtenerNombreActual() {

        if (this.current !== null) {
          const partes = this.current.data.split("/");
          const nombre = partes.pop();
      
          return nombre;
        } else {
          return null;
        }
      }

    iniciarReproduccion() {
        this.current = this.head;
    }
}
