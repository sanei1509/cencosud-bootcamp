import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}