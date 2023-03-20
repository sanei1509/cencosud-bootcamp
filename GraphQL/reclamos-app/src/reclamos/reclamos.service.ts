import { Injectable, NotFoundException } from '@nestjs/common';
import { Reclamo } from './entity/reclamo.entity';

@Injectable()
export class ReclamosService {
    //Arreglo de reclamos ficticio, SIMIL base de datos
    private reclamosCollection: Reclamo[] = [
        {
            id: 1,
            nroReclamo: 211,
            descripcion: "Reclamo de prueba",
            detalleDeCompra: "Detalle de compra de prueba",
            problema:  "Problema de prueba"
        },
        {
            id: 2,
            nroReclamo: 212,
            descripcion: "Reclamo de prueba 2",
            detalleDeCompra: "Detalle de compra de prueba 2",
            problema:  "Problema de prueba 2"
        },
        {
            id: 3,
            nroReclamo: 213,
            descripcion: "Reclamo de prueba 3",
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

    // Crear un reclamo
    createReclamo(nroReclamo: number, descripcion: string, detalleDeCompra: string, problema: string): Reclamo {
        //Genero un nuevo id: el largo del arreglo + 1
        const newId = this.reclamosCollection.length + 1;
        //Genero un nuevo reclamo con los datos recibidos
        const nuevoReclamo: Reclamo = {
            id: newId,
            nroReclamo: nroReclamo,
            descripcion: descripcion,
            detalleDeCompra: detalleDeCompra,
            problema: problema
        }
        //Agrego el reclamo a la colección de reclamos
        this.reclamosCollection.push(nuevoReclamo);
        //Devuelvo el reclamo creado
        return nuevoReclamo;
    }
    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)



}
