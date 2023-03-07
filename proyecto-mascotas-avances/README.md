# Tarea de la clase 2

## Clase, Modulos y Controladores


## Crear 4 modulos aparte con un get controlador que responda al endpoint

## Manera efectiva de crearlo:

1. Crear modulo

````
nest g mo name_module
````

2. Crear controlador

````
nest g co name_module
````

## se enlaza directamente a su modulo con el mismo nombre
solo resta crear los enpoints atraves de los verbos.



# Tarea clase 3

## Consigna: 

Luego de leer el material de los DTOS

1. Instalar class-validator

2. A cada uno de nuestros modulos/controlador le agregamos un dto

REQ : por paquete 4 atributos.

3. Agregar los servicios a los que no lo tengan `hacer las inyeccion de dependencias`


4. Agregar decoradores al controlador, @Get y @Post


5. Crear metodos en el servicio que ejecuten cierta logica


# Descripcion de la solucion



# Entregar avances durante lo dado en las clases

## Logrado hasta el momento:
 
 - crear modulos
 - crear controladores
 - crear servicios

 - Creacion y uso de DTO (data transfer object)
 - CRUD de un endpoint entero desde cero.

... 
- Creacion de repositorio sin poder implementar uso
- Creacion de entidad sin poder implementar uso


- Implementacion de repositorios en dos entidades

 Pendientes:

- Implementacion de las entidades
 - Implementacion de repositorio como la ultima capa antes de la persistencia de datos.
  


## Instalaciones necesarias para la parte del TypeORM


npm install class-transformer --save
npm install reflect-metadata --save
npm install mysql --save
npm install --save typeorm mysql2
npm i @nestjs/typeorm


## Conexion a la base de datos

Crear modulo y para la conexion con la base MySQL

