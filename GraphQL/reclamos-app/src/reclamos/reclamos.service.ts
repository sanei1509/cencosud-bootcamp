import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearReclamoInput } from './dto/inputs/crear-reclamo-input';
import { Reclamo } from './entity/reclamo.entity';

@Injectable()
export class ReclamosService {
    //Arreglo de reclamos ficticio, SIMIL base de datos
    private reclamosCollection: Reclamo[] = [
        {
            id: 1,
            nroReclamo: 211,
            titulo: "Reclamo de prueba",
            detalleDeCompra: "Detalle de compra de prueba",
            problema:  "Problema de prueba"
        },
        {
            id: 2,
            nroReclamo: 212,
            titulo: "Reclamo de prueba 2",
            detalleDeCompra: "Detalle de compra de prueba 2",
            problema:  "Problema de prueba 2"
        },
        {
            id: 3,
            nroReclamo: 213,
            titulo: "Reclamo de prueba 3",
            detalleDeCompra: "Detalle de compra de prueba 3",
            problema:  "Problema de prueba 3"
        }
    ]

    // Traer todos los reclamos, arreglo de reclamos
    getAllReclamos(): Reclamo[]{
        //devuelvo el arreglo de reclamos
        return this.reclamosCollection;
    }

    getReclamoById(id: number): Reclamo{
        //Si el reclamo no existe, devuelvo null
        let reclamo = null;
        reclamo = this.reclamosCollection.find(reclamo => reclamo.id === id);

        if (reclamo)
            return reclamo;
        else
            throw new NotFoundException(`Reclamo con ID ${id}, no encontrado`);
    }

    // createReclamo(nroReclamo: number, titulo: string, detalleDeCompra: string, problema: string): Reclamo {
    //     const newId = this.reclamosCollection.length + 1;
    //     const nuevoReclamo: Reclamo = {
    //         id: newId,
    //         nroReclamo: nroReclamo,
    //         titulo: titulo,
    //         detalleDeCompra: detalleDeCompra,
    //         problema: problema
    //     }
    //     this.reclamosCollection.push(nuevoReclamo);
    //     return nuevoReclamo;
    // }

    // Crear un reclamo
    create(createTodoInput: CrearReclamoInput ): Reclamo{
        const reclamo = new Reclamo();
        reclamo.id = this.reclamosCollection.length + 1;
        reclamo.nroReclamo = this.reclamosCollection.length + 2;
        reclamo.titulo = createTodoInput.titulo;
        reclamo.detalleDeCompra = createTodoInput.detalleDeCompra;
        reclamo.problema = createTodoInput.problema;

        this.reclamosCollection.push(reclamo);

        return reclamo;
    }
    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)



}
