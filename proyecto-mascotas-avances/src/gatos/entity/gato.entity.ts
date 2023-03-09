import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { Usuario } from "src/usuarios/entity/usuario.entity";

@Entity()
export class Gato{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Usuario, usuario => usuario.gatos)
    usuario: Usuario;
    
}