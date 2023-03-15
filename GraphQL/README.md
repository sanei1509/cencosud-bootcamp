# GraphQL

## Estamos hablando de un lenguaje de consultas para APIs

## ¿Qué es GraphQL?

Una alternativa a RESTFUL api que permite a los clientes solicitar exactamente los datos que necesitan de una API, en lugar de utilizar múltiples endpoints.

Brindandonos asi un menor gasto en transferencia de datos, cantidad de datos.

# Nest JS con GraphQL

## Que necesitamos saber para integrar GraphQL a nuestro proyecto NEST JS?

- Dominando nestJS solo necesitariamos conocer un par de decoradores correspondientes a GraphQL para sacarle provecho.


## Instalación

```bash 
$ npm install --save @nestjs/graphql graphql-tools graphql apollo-server-express
```

## Configuración

- Crear un archivo llamado graphql.module.ts en la carpeta modules

```typescript
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class GraphqlModule {}
```

- Importar el modulo en el archivo app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [GraphqlModule],
})
export class AppModule {}
```

- Crear un archivo llamado schema.gql en la carpeta raiz del proyecto

```graphql
type Query {
  hello: String
}
```

- Crear un archivo llamado hello.resolver.ts en la carpeta modules

```typescript
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }
}
```

- Importar el resolver en el archivo graphql.module.ts

```typescript
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloResolver } from './hello.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [HelloResolver],
})

export class GraphqlModule {}
```

- Ejecutar el proyecto

```bash

$ yarn start:dev

```

- Abrir el navegador en la siguiente url

```bash

http://localhost:3000/graphql

```

- Ejecutar la siguiente consulta

```graphql

query {
  hello
}

```

# Para aprender GraphQL vamos a hacer un APP de reclamos

## Crear un modulo llamado claims

```bash

$ nest g module claims

```

## Crear un servicio llamado claims

```bash

$ nest g service claims

```

## Crear un controlador llamado claims

```bash

$ nest g controller claims

```

## Crear un resolver llamado claims

```bash

$ nest g resolver claims

```

## Crear un archivo llamado claims.model.ts en la carpeta models

```typescript
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Claim {
  @Field(() => ID)
  idReclamo: string;

  @Field()
  descripcion: string;

  @Field()
  problema: string;

  @Field()
   detalleCompra: {
    formatoCSV: string;
    fechaCompra: date;
    nroFactura: string;
    codigoProducto: string;
   }
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClaimInput {
  @Field()
  descripcion: string;

  @Field()
  problema: string;

  @Field()
   detalleCompra: {
    formatoCSV: string;
    fechaCompra: date;
    nroFactura: string;
    codigoProducto: string;
   }
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class UpdateClaimInput {
  @Field()
  descripcion: string;

  @Field()
  problema: string;

  @Field()
   detalleCompra: {
    formatoCSV: string;
    fechaCompra: date;
    nroFactura: string;
    codigoProducto: string;
   }
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class DeleteClaimInput {
  @Field()
  idReclamo: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimInput {
  @Field()
  idReclamo: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsInput {
  @Field()
  idReclamo: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()


export class GetClaimsByUserInput {
  @Field()
  idUsuario: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsByProductInput {
  @Field()
  idProducto: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()


export class GetClaimsByDateInput {
  @Field()
  fecha: date;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsByStatusInput {
  @Field()
  estado: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsByUserAndStatusInput {
  @Field()
  idUsuario: string;

  @Field()
  estado: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';


@InputType()

export class GetClaimsByProductAndStatusInput {
  @Field()
  idProducto: string;

  @Field()
  estado: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()


export class GetClaimsByUserAndProductInput {
  @Field()
  idUsuario: string;

  @Field()
  idProducto: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';


@InputType()

export class GetClaimsByUserAndProductAndStatusInput {
  @Field()
  idUsuario: string;

  @Field()
  idProducto: string;

  @Field()
  estado: string;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript


import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsByUserAndProductAndDateInput {
  @Field()
  idUsuario: string;

  @Field()
  idProducto: string;

  @Field()
  fecha: date;
}
```

## Crear un archivo llamado claims.input.ts en la carpeta inputs

```typescript

import { Field, InputType } from '@nestjs/graphql';

@InputType()

export class GetClaimsByUserAndProductAndStatusAndDateInput {
  @Field()
  idUsuario: string;

  @Field()
  idProducto: string;

  @Field()
  estado: string;

  @Field()
  fecha: date;
}
```






# Autor

* Santiago Neira