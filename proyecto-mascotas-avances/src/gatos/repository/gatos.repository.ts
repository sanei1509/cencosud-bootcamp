import { Injectable } from '@nestjs/common';
import { filter } from 'rxjs';
import { GatoDto } from '../dto/gato.dto';

//Vamos a crear un repositorio para nuestro gato
@Injectable()
export class GatoRepository {        
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

    // Actualizamos la informacion de un gato
    update(id: number, gato: GatoDto) {
        const gatoIndex = this.gatosCollection.findIndex(gato => gato.id === id)
        this.gatosCollection[gatoIndex] = gato;
        return `${gato.name} ha sido actualizado correctamente`
    }



    // Eliminamos un gato por determinado ID
    deleteOne(id: number) {
        const gatoIndex = this.gatosCollection.findIndex(gato => gato.id === id)
        this.gatosCollection.splice(gatoIndex, 1)
        return `El gato ha sido eliminado correctamente`
    }

}
