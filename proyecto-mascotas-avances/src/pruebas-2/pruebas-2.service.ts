import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// importamos los schemas con los modelados de documentos
import { Prueba, PruebaDocument, PruebaSchema } from '../schemas/prueba.schemas';

// Queremos usar aqui dentor el servicio1
//Quiero ver la conexion entre servicios, que el 2 necesite del servicio 1

@Injectable()
export class Pruebas2Service {
    //Vamos a inyectar un modelo para nuestra base de datos
    // constructor(@InjectModel('Prueba') private readonly pruebaModel: Model<PruebaDocument>){}

    // constructor(@InjectModel(Prueba.name) private pruebaModel: Model<PruebaDocument>){}

    // es un servicio que vamos a determinar desde base de datos
    //entra el concepto aqui de asincronia


}
