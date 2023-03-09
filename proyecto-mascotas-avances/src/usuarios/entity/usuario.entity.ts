import { Gato } from "src/gatos/entity/gato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;
    
    @Column()
    username: string;
    
    @Column()
    email: string;

    @OneToMany(type => Gato, gato => gato.usuario)
    gatos: Gato[];
}