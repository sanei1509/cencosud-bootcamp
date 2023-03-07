import { Injectable } from '@nestjs/common';
import { PerroDto } from './dto/perro.dto';
import { PerroRepository } from './repository/perros.repository';

@Injectable()
export class PerrosService {
    //Inyectamos el repositorio con el que vamos a interactuar desde el servicio
    constructor(
        private repositorioPerros: PerroRepository
    ){}

    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearPerro(perro: PerroDto){
        this.repositorioPerros.perrosCollection.push(perro);
        return `${perro.name} ha sido creado correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.repositorioPerros.perrosCollection;
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const perro = this.repositorioPerros.perrosCollection.filter(perro => perro.id === id)
        console.log(perro)
        return perro
    }   

    // Actualizamos la informacion de un gato
    update(id: number, post: PerroDto) {
        //Buscamos el indice del gato pasado por parametro
        const perroIndex = this.repositorioPerros.perrosCollection.findIndex(perro => perro.id === id)
        //Mutamos ese objeto gato con la nueva informacion
        const perroActualizado = this.repositorioPerros.perrosCollection[perroIndex];
        this.repositorioPerros.perrosCollection[perroIndex] = post;
        return `el post de ${perroActualizado.name} ha sido actualizado correctamente`
    }
    
    
    
    // Eliminamos un post por determinado ID
    deleteOne(id: number) {
        const perroIndex = this.repositorioPerros.perrosCollection.findIndex(post => post.id === id)
        const perroEliminado = this.repositorioPerros.perrosCollection[perroIndex];
        //pasamos el indice del item y el numero a eliminar.
        this.repositorioPerros.perrosCollection.splice(perroIndex, 1)
        return `El perro ${perroEliminado.name} ha sido eliminado correctamente`
    }
}


