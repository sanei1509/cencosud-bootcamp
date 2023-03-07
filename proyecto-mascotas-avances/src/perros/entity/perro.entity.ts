import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Perro{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}