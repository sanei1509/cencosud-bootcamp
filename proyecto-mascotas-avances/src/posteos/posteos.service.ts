import { Injectable } from '@nestjs/common';
import {PostDto} from "./dto/posteo.dto";
import { Post } from './entity/post.entity';

@Injectable()
export class PosteosService {
    // Creamos los metodos que vamos a utilizar para retornar ciertas cosas en los controladores
    
    //Creamos coleccion ficticia de gatos
    posteos: PostDto[] = [
        {
            id: 1,
            author: 'Pablo Neruda',
            description: 'El amor es un fuego que arde sin ser visto',
            image: ".com"
        }
    ];


    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearPosteo(posteo: PostDto){
        this.posteos.push(posteo);
        return `La publicación de ${posteo.author} ha sido creada correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.posteos;
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const posteo = this.posteos.filter(posteo => posteo.id === id)
        console.log(posteo)
        return posteo
    }

        // Actualizamos la informacion de un gato
    update(id: number, post: PostDto) {
        //Buscamos el indice del gato pasado por parametro
        const postIndex = this.posteos.findIndex(gato => gato.id === id)
        //Mutamos ese objeto gato con la nueva informacion
        this.posteos[postIndex] = post;
        return `el post de ${post.author} ha sido actualizado correctamente`
    }
    
    
    
    // Eliminamos un post por determinado ID
    deleteOne(id: number) {
        const postIndex = this.posteos.findIndex(post => post.id === id)
        this.posteos.splice(postIndex, 1)
        return `El post ha sido eliminado correctamente`
    }
}
