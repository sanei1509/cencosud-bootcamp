import { Injectable, NotFoundException } from '@nestjs/common';
import { tituloArgsFilter } from './dto/args/tituloArgs';
import { ActualizarReclamoInput } from './dto/inputs/actualizar-reclamo-input';
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
    // Filtro : si recibimos titulo especificado se aplica el filtro
    getAllReclamos(titulo? : tituloArgsFilter): Reclamo[]{
        //Si recibimos titulo, devuelvo el arreglo de reclamos cuyo titulo contenga la palabra
        if (titulo)
            return this.reclamosCollection.filter(reclamo => reclamo.titulo.includes(titulo.palabraClave));
        
            
        //Si no recibimos titulo, devuelvo el arreglo de reclamos
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
    create(crearReclamoInput: CrearReclamoInput ): Reclamo{
        const reclamo = new Reclamo();
        reclamo.id = this.reclamosCollection.length + 1;
        reclamo.nroReclamo = this.reclamosCollection.length + 2;
        reclamo.titulo = crearReclamoInput.titulo;
        reclamo.detalleDeCompra = crearReclamoInput.detalleDeCompra;
        reclamo.problema = crearReclamoInput.problema;

        this.reclamosCollection.push(reclamo);

        return reclamo;
    }
    
    // Actualizar un reclamo por id
    update(id: number, actualizarReclamoInput: ActualizarReclamoInput): Reclamo{
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
    delete(id: number): boolean{
        // Busco el reclamo solicitado para eliminar
        const reclamo = this.getReclamoById(id);
        console.log(reclamo);

        // Devuelvo todos los reclamos que no sean el reclamo que quiero eliminar
        this.reclamosCollection = this.reclamosCollection.filter(reclamo => reclamo.id !== id);

        return true
    }


    // Traer reclamos por palabra clave (Titulo, problema)
    getReclamoPorPalabraClave(palabraClave: string): Reclamo[]{

        // Si la palabra clave esta vacia, devuelvo todos los reclamos
        if (!palabraClave || palabraClave === "")
        return this.reclamosCollection;

        //Limpio ambas cadenas de texto para compararlas
        palabraClave = palabraClave.trim().toLowerCase();
        return this.reclamosCollection.filter(reclamo => reclamo.titulo.toLowerCase().includes(palabraClave) || reclamo.problema.toLowerCase().includes(palabraClave));
     }


    // Traer una lista de reclamos filtrados por palabra clave. (titulo, Problema)
    getReclamosFiltrados(palabraClave: string): Reclamo[]{
        return this.reclamosCollection.filter(reclamo => reclamo.titulo.includes(palabraClave) || reclamo.problema.includes(palabraClave));
    }

}
