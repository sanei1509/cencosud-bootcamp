import { Gato } from "src/gatos/entity/gato.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Perro{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    //relacion uno a uno con gato
    @OneToOne(type => Gato, gato => gato.perro)
    gato: Gato;
}