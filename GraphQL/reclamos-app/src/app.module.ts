import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ReclamosModule } from './reclamos/reclamos.module';

@Module({
  imports: [
    // Enlace a la app con graphql
    // un solo for root en la app principal
    // luego serian forFeatures en los modulos independientes para agregar mas funcionalidades
    GraphQLModule.forRoot<ApolloDriverConfig>({
      //debug: true,
      //playground: true,
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        //plugin para poder relizar y visualizar nuestras consultas en el navegador
        ApolloServerPluginLandingPageLocalDefault()
      ]  
    }),
    ReclamosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
