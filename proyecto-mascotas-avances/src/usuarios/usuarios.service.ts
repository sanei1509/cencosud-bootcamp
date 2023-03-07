import { Injectable } from '@nestjs/common';
import { UserDto } from './dto.usuario';

@Injectable()
export class UsuariosService {
    private usuarios: UserDto[] = [
        {
            id: 1,
            fullname: 'Juan Perez',
            username: 'juanperez12',
            email: "juan@gmail.com"
        }
    ]

    //Creamos nuevo nuevo:
    //Vamos a recibir un item que cumpla con el dto
    crearPosteo(usuario: UserDto){
        this.usuarios.push(usuario);
        return `La publicación de ${usuario.username} ha sido creada correctamente`
    } 

    // Metodo para traer todos los gatos
    getAll() {
        return this.usuarios;
    }   


    //Traemos un gato especifico
    findOne(id: number) {
        const posteo = this.usuarios.filter(posteo => posteo.id === id)
        console.log(posteo)
        return posteo
    }  
}
