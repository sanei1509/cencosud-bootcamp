import { Injectable } from '@nestjs/common';
import { PerroDto } from '../dto/perro.dto';

@Injectable()
export class PerroRepository {
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

    // Actualizamos la informacion de un gato
    update(id: number, post: PerroDto) {
        //Buscamos el indice del gato pasado por parametro
        const postIndex = this.perrosCollection.findIndex(gato => gato.id === id)
        //Mutamos ese objeto gato con la nueva informacion
        this.perrosCollection[postIndex] = post;
        return `el post de ${post.name} ha sido actualizado correctamente`
    }
    
    
    
    // Eliminamos un post por determinado ID
    deleteOne(id: number) {
        const perroIndex = this.perrosCollection.findIndex(post => post.id === id)
        const perroEliminado = this.perrosCollection[perroIndex];
        //pasamos el indice del item y el numero a eliminar.
        this.perrosCollection.splice(perroIndex, 1)
        return `El perro ha sido eliminado correctamente`
    }
}


