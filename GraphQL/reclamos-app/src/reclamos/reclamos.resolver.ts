import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

//Nuestra especie de controlador de peticiones, pero que vamos a integrar en la app como provider
@Resolver()
export class ReclamosResolver {
    @Query(() => String)
    pruebaReclamos(): string {
        return "Aqui toy desde reclamos"
    }

    // Traer todos los reclamos
    

    // Traer un reclamo por id


    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
