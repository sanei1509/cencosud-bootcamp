import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GatoDto } from './dto/gato.dto';
import { GatoRepository } from './repository/gatos.repository';
import { Gato } from './entity/gato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GatosService {
    //Inyectamos el repositorio
    // constructor(
    //     private repositorioGato: GatoRepository
    // ){}

    
    //Inyectamos el repositorio
    //Convertimos en un repositorio de typeorm
    //Atraves del repositorio de typeorm podemos hacer las operaciones de la base de datos CONSULTAS
    constructor(@InjectRepository(Gato) private repositorioGato: Repository<Gato> ){
    }

    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearGato(gato: GatoDto){
        //creamso y guardamos el gato
        let newGato = this.repositorioGato.create(gato);
        this.repositorioGato.save(newGato);
        return `${newGato.name} ha sido creado correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.repositorioGato.find();
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const gato = this.repositorioGato.findOne({
            where: {
                id: id
            }
        })
        console.log(gato)
        return gato
    }

    // Actualizamos la informacion de un gato
    update(id: number, gato: GatoDto) {
        //Buscamos el indice del gato pasado por parametro
        // const gatoIndex = this.repositorioGato.gatosCollection.findIndex(gato => gato.id === id)
        //Mutamos ese objeto gato con la nueva informacion
        // this.repositorioGato.gatosCollection[gatoIndex] = gato;
        return `${gato.name} ha sido actualizado correctamente`
    }
    
    
    
    // Eliminamos un gato por determinado ID
    deleteOne(id: number) {
        // const gatoIndex = this.repositorioGato.gatosCollection.findIndex(gato => gato.id === id)
        // this.repositorioGato.gatosCollection.splice(gatoIndex, 1)
        return `El gato ha sido eliminado correctamente`
    }
}
