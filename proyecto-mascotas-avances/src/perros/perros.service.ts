import { Injectable } from '@nestjs/common';
import { PerroDto } from './dto/perro.dto';

@Injectable()
export class PerrosService {
     // Creamos los metodos que vamos a utilizar para retornar ciertas cosas en los controladores
    
    //Creamos coleccion ficticia de gatos
    perrosCollection: PerroDto[] = [
        {
            id: 1,
            name: 'Boby'
        }
    ];


    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearPerro(perro: PerroDto){
        this.perrosCollection.push(perro);
        return `${perro.name} ha sido creado correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.perrosCollection;
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const perro = this.perrosCollection.filter(perro => perro.id === id)
        console.log(perro)
        return perro
    }   
}


