import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// conexion a la base de datos
import { MongooseModule } from '@nestjs/mongoose';

// Importamos modulos a inyectar en nuestra app
import { PerrosModule } from './perros/perros.module';
import { GatosModule } from './gatos/gatos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PosteosModule } from './posteos/posteos.module';
import { PruebasModule } from './pruebas/pruebas.module';
import { Pruebas2Module } from './pruebas-2/pruebas-2.module';
// servicios de prueba
import { PruebasService } from './pruebas/pruebas.service';
import { Pruebas2Service } from './pruebas-2/pruebas-2.service';

const url_connect = "mongodb+srv://admin_test_1:root@cluster0.feagcuz.mongodb.net/DB_TEST?retryWrites=true&w=majority"

@Module({
  imports: [PerrosModule, GatosModule, UsuariosModule, PosteosModule, PruebasModule, 
  
  // conexion a la base de datos
  // MongooseModule.forRoot('mongodb://localhost:27017/DB_PERROS')
  MongooseModule.forRoot(url_connect), Pruebas2Module
  ],
  controllers: [AppController],
  providers: [AppService, PruebasService, Pruebas2Service],
})
export class AppModule {} 
