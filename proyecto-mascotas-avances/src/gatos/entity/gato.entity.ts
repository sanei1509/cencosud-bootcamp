import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gato{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}