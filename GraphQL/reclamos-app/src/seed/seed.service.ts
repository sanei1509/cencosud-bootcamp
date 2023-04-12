import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Reclamo } from 'src/reclamos/entity/reclamo.entity';
import { Usuario } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
    //Queremos saber si estamos en produccion o en desarrollo
    private production: boolean;

    constructor(
        private readonly configService: ConfigService,
        // Enlace a nuestra base de datos
        @InjectRepository(Reclamo)
        private reclamosRepository: Repository<Reclamo>,
        @InjectRepository(Usuario) 
        private readonly usuarioRepository: Repository<Usuario>,
        ) {
        this.production = this.configService.get('STATE') === 'prod' ? true : false;
    }


    // EXecute seed o Carga de datos
    async seed(): Promise<boolean> {
        //Verificamos que no estemos en produccion
        if (this.production){
            throw new Error('No se puede ejecutar el seed en producción');
        }
        // 1. Limpiar la base de datos para que no choque la carga
        // await this.limpiarBaseDeDatos();
        // 2. Cargar usuarios


        // 3. Cargar reclamos para cada usuario
        return true;
    }

    async limpiarBaseDeDatos(): Promise<boolean> {
        // 1. Borrar reclamos : no pueden quedar reclamos sueltos
        await this.reclamosRepository.createQueryBuilder().delete().where({}).execute();
        // 2. Borrar usuarios
        await this.usuarioRepository .createQueryBuilder().delete().where({}).execute();

        return true;
    }

}
