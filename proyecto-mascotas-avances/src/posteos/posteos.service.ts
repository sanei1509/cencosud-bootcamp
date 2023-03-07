import { Injectable } from '@nestjs/common';
import {PostDto} from "./dto/posteo.dto";

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
}
