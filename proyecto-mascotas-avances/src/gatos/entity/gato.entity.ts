import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { Usuario } from "src/usuarios/entity/usuario.entity";
import { Perro } from "src/perros/entity/perro.entity";

@Entity()
export class Gato{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Usuario, usuario => usuario.gatos)
    usuario: Usuario;

    @OneToOne(type => Perro, perro => perro.gato)
    perro: Perro;
}