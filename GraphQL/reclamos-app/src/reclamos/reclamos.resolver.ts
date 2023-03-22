import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { ActualizarReclamoInput } from './dto/inputs/actualizar-reclamo-input';
import { CrearReclamoInput } from './dto/inputs/crear-reclamo-input';
import { Reclamo } from './entity/reclamo.entity';
import { ReclamosService } from './reclamos.service';

// Nuestro resolver va a responder todo lo relacionado a los RECLAMOS (tickets)
@Resolver(() => Reclamo)
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
    @Mutation(() => Reclamo, {name: "createReclamo", description: "Crear un nuevo ticket de reclamo"}) 
    createReclamo(
        @Args('crearReclamoInput') crearReclamoInput: CrearReclamoInput,
    ): Reclamo {
        return this.reclamosService.create(crearReclamoInput);
    }

    // Actualizar un reclamo por id
    @Mutation(() => Reclamo, {name: "updateReclamo", description: "Actualizar un ticket de reclamo existente"})
    updateReclamo(
        @Args('actualizarReclamoInput') actualizarReclamoInput: ActualizarReclamoInput,
    ): Reclamo {
        return this.reclamosService.update(actualizarReclamoInput.id ,actualizarReclamoInput)
    }

    // Borrar un reclamo por id
    @Mutation(() => Boolean, {name: "deleteReclamo", description: "Borrar un ticket de reclamo existente"})
    deleteReclamo(
        @Args('id', {type: () => Int}) id: number
    ): boolean {
        return this.reclamosService.delete(id);
    }

    // Traer reclamos por palabra clave (descripcion, problematica)
    @Query(() => [Reclamo], {name: "reclamosPorPalabraClave", description: "Listar todos los tickets de reclamos por palabra clave"})
    getReclamoPorPalabraClave(
        @Args('palabraClave') palabraClave: string
    ): Reclamo[]{
        return this.reclamosService.getReclamoPorPalabraClave(palabraClave);
    }
    

    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
