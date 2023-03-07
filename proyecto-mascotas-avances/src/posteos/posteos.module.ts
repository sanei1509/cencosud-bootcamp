//Modulo de posteos
import { Module } from "@nestjs/common";

import { PosteosController } from "./posteos.controller";
import { PosteosService } from './posteos.service';

@Module({
    imports: [],
    controllers: [PosteosController],
    providers: [PosteosService],
})


export class PosteosModule {}