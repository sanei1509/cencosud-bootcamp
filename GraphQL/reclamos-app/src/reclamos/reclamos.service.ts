import { Injectable, NotFoundException } from '@nestjs/common';
import { tituloArgsFilter } from './dto/args/tituloArgs';

import { Reclamo } from './entity/reclamo.entity';
import { CrearReclamoInput, ActualizarReclamoInput } from './dto/inputs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReclamosService {
    // Inyeccion del repositorio
    constructor(
        // decorador para conexion con nestJS
        @InjectRepository(Reclamo)
        private reclamosRepository: Repository<Reclamo>
    ) {}


    //Arreglo de reclamos ficticio, SIMIL base de datos
    // private reclamosRepository: Reclamo[] = [
    //     {
    //         id: "1",
    //         nroReclamo: 211,
    //         titulo: "Reclamo de prueba",
    //         detalleDeCompra: "Detalle de compra de prueba",
    //         problema:  "Problema de prueba"
    //     },
    //     {
    //         id: "2",
    //         nroReclamo: 212,
    //         titulo: "Reclamo de prueba 2",
    //         detalleDeCompra: "Detalle de compra de prueba 2",
    //         problema:  "Problema de prueba 2"
    //     },
    //     {
    //         id: "3",
    //         nroReclamo: 213,
    //         titulo: "Reclamo de prueba 3",
    //         detalleDeCompra: "Detalle de compra de prueba 3",
    //         problema:  "Problema de prueba 3"
    //     }
    // ]

    // Traer todos los reclamos, arreglo de reclamos
    // Filtro : si recibimos titulo especificado se aplica el filtro
    getAllReclamos(titulo? : tituloArgsFilter): string{
        //Si recibimos titulo, devuelvo el arreglo de reclamos cuyo titulo contenga la palabra
        if (titulo)
            // return this.reclamosRepository.filter(reclamo => reclamo.titulo.includes(titulo.palabraClave));
            return "Devuelvo arreglo de reclamos que tengan en su titulo la palabra clave"
        
            
        //Si no recibimos titulo, devuelvo el arreglo de reclamos
        return "Devuelvo todos los reclamos []";
    }

    getReclamoById(id: string): Reclamo{
        //Si el reclamo no existe, devuelvo null
        let reclamo = null;
        // reclamo = this.reclamosRepository.find(reclamo => reclamo.id === id);
        

        if (reclamo)
            return reclamo;
        else
            throw new NotFoundException(`Reclamo con ID ${id}, no encontrado`);
    }

    // Crear un reclamo
    async create(crearReclamoInput: CrearReclamoInput ): Promise<Reclamo>{
        const nuevoReclamo = this.reclamosRepository.create(crearReclamoInput);
        // Persistencia de datos
        await this.reclamosRepository.save(nuevoReclamo);
        console.log(nuevoReclamo);
        return nuevoReclamo;
    }
    
    // Actualizar un reclamo por id
    update(id: string, actualizarReclamoInput: ActualizarReclamoInput): Reclamo{
        // Desturcturing del objeto actualizarReclamoInput
        const {titulo, detalleDeCompra, problema} = actualizarReclamoInput;

        // Busco el reclamo que tengo que utilizar por id recibido
        const reclamo = this.getReclamoById(id);

        console.log(reclamo);
        // Actualizo los datos del reclamo
        if (titulo)
            reclamo.titulo = titulo;
        if (detalleDeCompra)
            reclamo.detalleDeCompra = detalleDeCompra;
        if (problema)
            reclamo.problema = problema;
        
        // Devuelvo el reclamo actualizado
        return reclamo;
    }


    // Borrar un reclamo por id
    delete(id: string): string{
        // Busco el reclamo solicitado para eliminar
        const reclamo = this.getReclamoById(id);
        console.log(reclamo);

        // Devuelvo todos los reclamos que no sean el reclamo que quiero eliminar
        // this.reclamosRepository = this.reclamosRepository.filter(reclamo => reclamo.id !== id);

        return  "Reclamo eliminado";
    }


    // Traer reclamos por palabra clave (Titulo, problema)
    getReclamoPorPalabraClave(palabraClave: string): string{

        // Si la palabra clave esta vacia, devuelvo todos los reclamos
        if (!palabraClave || palabraClave === "")
        return "Devuelvo todos los reclamos";

        //Limpio ambas cadenas de texto para compararlas
        // palabraClave = palabraClave.trim().toLowerCase();
        // return this.reclamosRepository.filter(reclamo => reclamo.titulo.toLowerCase().includes(palabraClave) || reclamo.problema.toLowerCase().includes(palabraClave));
        return "Devuelvo los reclamos filtrados por palabra clave"
     }


    // Traer una lista de reclamos filtrados por palabra clave. (titulo, Problema)
    getReclamosFiltrados(palabraClave: string): string{
        // return this.reclamosRepository.filter(reclamo => reclamo.titulo.includes(palabraClave) || reclamo.problema.includes(palabraClave));
        return "Devuelvo los reclamos que sigan cierta regla"
    }

}
