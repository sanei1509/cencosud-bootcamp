import { Args, ID, Int, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { type } from 'os';

import { Reclamo } from './entity/reclamo.entity';
import { CrearReclamoInput, ActualizarReclamoInput} from './dto/inputs'; 
import { ReclamosService } from './reclamos.service';
import { IsUUID } from 'class-validator';
import { ParseUUIDPipe } from '@nestjs/common';

// Nuestro resolver va a responder todo lo relacionado a los RECLAMOS (tickets)
@Resolver(() => Reclamo)
export class ReclamosResolver {
    // Inyeccion del servicio
    constructor(
        private readonly reclamosService: ReclamosService
        // private readonly usuariosService: UsuariosService
    ) {}

    // Traer todos los reclamos, arreglo de reclamos
    @Query(() => [Reclamo], {name: "reclamos", description: "Listar todos los tickets de reclamos DB"})
    async getAllReclamos(): Promise<Reclamo[]> {
        //devuelvo el arreglo de reclamos
        return this.reclamosService.getAllReclamos();
    }

    // Traer un reclamo por id
    @Query(() => Reclamo, {name: "reclamoID", description: "Listar un ticket solicitado por app"})
    async getReclamoById(@Args('id', {type: () => ID}, ParseUUIDPipe)id: string
    ): Promise<Reclamo>{
        return this.reclamosService.getReclamoById(id);
    }

    // Crear un reclamo
    @Mutation(() => Reclamo, {name: "CrearReclamo", description: "Crear un nuevo ticket de reclamo"}) 
    async createReclamo(
        @Args('crearReclamoInput') crearReclamoInput: CrearReclamoInput,
    ):  Promise<Reclamo> {
        return this.reclamosService.create(crearReclamoInput);
    }

    // Actualizar un reclamo por id
    @Mutation(() => Reclamo, {name: "updateReclamo", description: "Actualizar un ticket de reclamo existente"})
    async updateReclamo(
        @Args('actualizarReclamoInput') actualizarReclamoInput: ActualizarReclamoInput,
    ): Promise<Reclamo>{
        return this.reclamosService.update(actualizarReclamoInput.id ,actualizarReclamoInput)
    }

    // Borrar un reclamo por id
    @Mutation(() => Reclamo, {name: "deleteID", description: "Borrar un ticket de reclamo existente"})
    async deleteReclamo(
        @Args('id', {type: () => ID}) id: string
    ): Promise<Reclamo>{
        return this.reclamosService.delete(id);
    }

    // Traer reclamos por palabra clave (descripcion, problematica)
    @Query(() => [Reclamo], {name: "reclamosPorPalabraClave", description: "Listar todos los tickets de reclamos por palabra clave"})
    getReclamoPorPalabraClave(
        @Args('palabraClave') palabraClave: string
    // ): Reclamo[]{
    ): string{
        return "Aqui toy"
        // return this.reclamosService.getReclamoPorPalabraClave(palabraClave);
    }

    // Traer una lista de reclamos filtrados por palabra clave. (descripcion, problematica)


}
