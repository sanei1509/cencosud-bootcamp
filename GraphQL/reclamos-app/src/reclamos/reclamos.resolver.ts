import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Reclamo } from './entity/reclamo.entity';


//Arreglo de reclamos ficticio
const reclamos: Reclamo[] = [
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

//Nuestra especie de controlador de peticiones, pero que vamos a integrar en la app como provider
@Resolver()
export class ReclamosResolver {
    // @Query(() => String)
    // pruebaReclamos(): string {
    //     return "Aqui toy desde reclamos"
    // }

    // Traer todos los reclamos, arreglo de reclamos
    @Query(() => [Reclamo], {name: "reclamos"})
    getAllReclamos(): Reclamo[]{
        //devuelvo el arreglo de reclamos
        return reclamos;
    }

    // Traer un reclamo por id


    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
