import { Injectable } from '@nestjs/common';

@Injectable()
export class PruebasService {

    saludos: string[] = ["Hola", "Hola 2", "Hola 3"]

    constructor() {
        console.log("Servicio de pruebas creado")
    }

    traerSaludo(){
        console.log(this.saludos[0]); 
            this.saludos.shift();
    }
}
