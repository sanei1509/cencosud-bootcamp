import { Injectable } from '@nestjs/common';
import { filter } from 'rxjs';
import { GatoDto } from './dto/gato.dto';

@Injectable()
export class GatosService {
    // Creamos los metodos que vamos a utilizar para retornar ciertas cosas en los controladores
    
    //Creamos coleccion ficticia de gatos
    gatosCollection: GatoDto[] = [
        {
            id: 1,
            name: 'Tom'
        }
    ];


    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearGato(gato: GatoDto){
        this.gatosCollection.push(gato);
        return `${gato.name} ha sido creado correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.gatosCollection;
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const gato = this.gatosCollection.filter(gato => gato.id === id)
        console.log(gato)
        return gato
    }
}
