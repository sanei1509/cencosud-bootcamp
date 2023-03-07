import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gato } from 'src/gatos/entity/gato.entity';
import { Perro } from 'src/perros/entity/perro.entity';
import { Usuario } from 'src/usuarios/entity/usuario.entity';
import {Post} from 'src/posteos/entity/post.entity'

//Para que puedamos importar este modulo en cualquier parte de la aplicacion
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'Proyecto-mascotas',
      entities: [Gato, Perro, Post, Usuario],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000,
      autoLoadEntities: true,
    }),
    }),
  ],
})


export class DatabaseModule {}