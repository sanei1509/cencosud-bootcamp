import { Usuario } from "src/usuarios/entity/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;
    
    @Column()
    description: string;
    
    @Column()
    image: string;

    //relacion de muchos a uno con usuario
    @ManyToOne(type => Usuario, usuario => usuario.post)
    usuario: Usuario;
}