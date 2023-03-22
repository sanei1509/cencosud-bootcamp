import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { CrearReclamoInput } from './dto/inputs/crear-reclamo-input';
import { Reclamo } from './entity/reclamo.entity';
import { ReclamosService } from './reclamos.service';

//Nuestra especie de controlador de peticiones, pero que vamos a integrar en la app como provider
@Resolver(of => Reclamo)
export class ReclamosResolver {
    // @Query(() => String)
    // pruebaReclamos(): string {
    //     return "Aqui toy desde reclamos"
    // }
    constructor(
        private readonly reclamosService: ReclamosService
        // private readonly usuariosService: UsuariosService
    ) {}

    // Traer todos los reclamos, arreglo de reclamos
    @Query(() => [Reclamo], {name: "reclamos", description: "Listar todos los tickets de reclamos"})
    getAllReclamos(): Reclamo[]{
        //devuelvo el arreglo de reclamos
        return this.reclamosService.getAllReclamos();
    }

    // Traer un reclamo por id
    @Query(() => Reclamo, {name: "reclamo", description: "Listar un ticket solicitado por app"})
    getReclamoById(@Args('id', {type: () => Int})id: number
    ): Reclamo{
        return this.reclamosService.getReclamoById(id);
    }

    // Crear un reclamo
    @Mutation(() => Reclamo, {name: "createReclamo"}) 
    createReclamo(
        @Args('crearReclamoInput') crearReclamoInput: CrearReclamoInput,
    ): Reclamo {
        return this.reclamosService.create(crearReclamoInput);
    }

    // Actualizar un reclamo por id


    // Borrar un reclamo por id


    // Traer reclamos por palabra clave (descripcion, problematica)


    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
