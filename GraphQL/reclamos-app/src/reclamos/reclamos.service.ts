import { Injectable } from '@nestjs/common';
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

}
