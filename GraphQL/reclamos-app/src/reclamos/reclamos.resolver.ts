import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Reclamo } from './entity/reclamo.entity';
import { ReclamosService } from './reclamos.service';

//Nuestra especie de controlador de peticiones, pero que vamos a integrar en la app como provider
@Resolver()
export class ReclamosResolver {
    // @Query(() => String)
    // pruebaReclamos(): string {
    //     return "Aqui toy desde reclamos"
    // }
    constructor(
        private readonly reclamosService: ReclamosService
    ) {}

    // Traer todos los reclamos, arreglo de reclamos
    @Query(() => [Reclamo], {name: "reclamos"})
    getAllReclamos(): Reclamo[]{
        //devuelvo el arreglo de reclamos
        return this.reclamosService.getAllReclamos();
    }

    // Traer un reclamo por id


    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
