# Proyecto individual entregable

## Letra 

<img href="https://user-images.githubusercontent.com/69850751/225662220-11ccbee1-419c-408f-a0ee-63b23bf87a58.png" />

## Requerimientos

Acciones CRUD para la entidad Reclamo

- obtener todos los reclamos
- obtener un reclamo por id
- actualizar un reclamo por id
- borrar un reclamo por id
- buscar reclamos por palabra clave (descripcion, problematica)
- obtener una lista de reclamos filtrados por palabra clave. (descripcion, problematica)



## Modelo de reclamos

```json
{
  "idReclamo": 1,
  "descripcion": "El producto no funciona",
  "detalleCompra": {
    "formatoCSV": "idProducto, cantidad, precioUnitario, precioTotal",
    "fechaCompra": "2020-01-01",
    "nroFactura": "123456",
    "codigoProducto": "123456",
  },
  "problematica": "El producto no funciona",
}
```

## Entidad Reclamo

```ts
@Entity()
export class Reclamo {
  @PrimaryGeneratedColumn()
  idReclamo: number;

  @Column()
  descripcion: string;

  @Column()
  detalleCompra: {
    formatoCSV: string;
    fechaCompra: string;
    nroFactura: string;
    codigoProducto: string;
  };

  @Column()
  problematica: string;
}
```

## Testing de la API

1. Crear reclamo

```graphql

mutation {
  createReclamo(
    input: {
      descripcion: "El producto no funciona"
      detalleCompra: {
        formatoCSV: "idProducto, cantidad, precioUnitario, precioTotal"
        fechaCompra: "2020-01-01"
        nroFactura: "123456"
        codigoProducto: "123456"
      }
      problematica: "El producto no funciona"
    }
  ) {
    idReclamo
    descripcion
    detalleCompra {
      formatoCSV
      fechaCompra
      nroFactura
      codigoProducto
    }
    problematica
  }
}
```

2. Leer reclamo

```graphql

query {
  reclamo(idReclamo: 1) {
    idReclamo
    descripcion
    detalleCompra {
      formatoCSV
      fechaCompra
      nroFactura
      codigoProducto
    }
    problematica
  }
}
```

3. Actualizar reclamo

```graphql


mutation {
  updateReclamo(
    idReclamo: 1
    input: {
      descripcion: "El producto no funciona"
      detalleCompra: {
        formatoCSV: "idProducto, cantidad, precioUnitario, precioTotal"
        fechaCompra: "2020-01-01"
        nroFactura: "123456"
        codigoProducto: "123456"
      }
      problematica: "El producto no funciona"
    }
  ) {
    idReclamo
    descripcion
    detalleCompra {
      formatoCSV
      fechaCompra
      nroFactura
      codigoProducto
    }
    problematica
  }
}
```


4. Borrar reclamo

```graphql

mutation {
  deleteReclamo(idReclamo: 1) {
    idReclamo
    descripcion
    detalleCompra {
      formatoCSV
      fechaCompra
      nroFactura
      codigoProducto
    }
    problematica
  }
}
```

5. Paginación

```graphql

query {
  reclamos(pagination: { page: 1, limit: 10 }) {
    data {
      idReclamo
      descripcion
      detalleCompra {
        formatoCSV
        fechaCompra
        nroFactura
        codigoProducto
      }
      problematica
    }
    pagination {
      page
      limit
      total
    }
  }
}
```

# Paso a paso para crear el proyecto

## Instalar NestJS

## Crear proyecto con NestJS

## Instalar graphql en el proyecto, express and apolo

````
yarn add @nestjs/graphql @nestjs/apollo @apollo/server graphql

````

## Tenemos 2 opciones utilizar ``SCHEMA FIRST`` O ``CODE FIRST``
 - [Schema First](https://docs.nestjs.com/graphql/quick-start#schema-first)
  - [Code First](https://docs.nestjs.com/graphql/quick-start#code-first)

  CODE FIRST : es más sencillo de implementar si dominas nest, como es nuestro caso.

  Se podría escribir directamente los tipos con  graphql, pero NestJS nos permite usar Typescript para definir los tipos y que luego se ``traduzcan`` a graphql.

## Todos los servidores que se ejecutan con GraphQL necesitan al menos tener un ``RESOLVER`` que ejecute una ``QUERY`` o ``MUTATION``.

## Crear un resolver

```ts
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}
```


## Diferencia entre REST y GraphQL

REST: solicitamos todo el recurso y luego filtramos lo que necesitamos.

GRAPHQL: solicitamos solo lo que necesitamos,  una petición personalizada.

# Autor

* Santiago Neira



