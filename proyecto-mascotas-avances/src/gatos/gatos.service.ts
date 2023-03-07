import { Injectable } from '@nestjs/common';
import { GatoDto } from './dto/gato.dto';
import { GatoRepository } from './repository/gatos.repository';

@Injectable()
export class GatosService {
    //Inyectamos el repositorio
    constructor(
        private repositorioGato: GatoRepository
    ){}


    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearGato(gato: GatoDto){
        this.repositorioGato.crearGato(gato);
        return `${gato.name} ha sido creado correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.repositorioGato.getAll();
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const gato = this.repositorioGato.gatosCollection.filter(gato => gato.id === id)
        console.log(gato)
        return gato
    }

    // Actualizamos la informacion de un gato
    update(id: number, gato: GatoDto) {
        //Buscamos el indice del gato pasado por parametro
        const gatoIndex = this.repositorioGato.gatosCollection.findIndex(gato => gato.id === id)
        //Mutamos ese objeto gato con la nueva informacion
        this.repositorioGato.gatosCollection[gatoIndex] = gato;
        return `${gato.name} ha sido actualizado correctamente`
    }
    
    
    
    // Eliminamos un gato por determinado ID
    deleteOne(id: number) {
        const gatoIndex = this.repositorioGato.gatosCollection.findIndex(gato => gato.id === id)
        this.repositorioGato.gatosCollection.splice(gatoIndex, 1)
        return `El gato ha sido eliminado correctamente`
    }
}
