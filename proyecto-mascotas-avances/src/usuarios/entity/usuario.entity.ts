import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}