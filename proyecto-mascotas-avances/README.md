# Proyecto de mascotas
``descripción:`` proyecto realizado en simultaneo al curso para ir aplicando todo lo visto y aprendido. 

## INICIO de la app
Instalador de paquete utilizado : ``yarn``

````
yarn start:dev 
````

## Pauta final brindada por el mentor ``Agustin fiordelisi`` - ``Introducción a NestJS``
Trabajo Practico: 
 1. Generar una aplicación con al menos 4 Módulos con sus controladores y sus respectivas rutas, verbos HTTP y PipeValidators 
 2. Generar 4 DTOs referidos a cada módulo con algunos ClassValidators. 
 3. Generar 4 servicios (No necesariamente con funciones) y que estén correctamente importados en cada modulo. 
 4. Generar una conexión a alguna base de Datos (mysql o postgre) Con ``TypeORM``.
 5. generar 4 entidades con sus respectivas relaciones: "one to one, many to many, many to one".
  Agregar la funcionalidad de ``Crear``, ``Obtener todos`` (Opcional de obtener uno), ``editar`` y ``eliminar``; 
  
  * desde un solo modulo, en mi caso elegi el modulo/entidad CAT para todo esto.
  
  ``OPCIONAL``: Incluir un ExceptionFilter


## Paso a paso para completar la tarea

## Crear 4 modulos aparte con un get controlador que responda al endpoint

TIP importante seguir la guia de nest por posibles cambios.

0. Instalar nest y generar un proyecto

````
$ npm i -g @nestjs/cli

$ nest new Proyecto-mascotas
````

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


## Status de avances durante lo dado en las clases

### Logrado hasta el momento:
 
 - crear modulos
 - crear controladores
 - crear servicios

 - Creacion y uso de DTO (data transfer object)
 - CRUD de un endpoint entero desde cero.

... 
- Implementacion de la capa repositorios en dos entidades
- Conexión a la base de datos MySQL


## Instalaciones necesarias para la parte del TypeORM


npm install class-transformer --save
npm install reflect-metadata --save
npm install mysql --save
npm install --save typeorm mysql2
npm i @nestjs/typeorm


## Conexión a la base de datos.
Crear modulo para la conexion con la base MySQL

1. Instalar MySQL en la maquina
2. Instalar Motor de base de datos EJ: ``Workbench``
3. Definir las entidades con ``TYPEORM``
4. Chequear autogeneracion en el workbench o en respectivo gestor de base de datos.

- ``Typeorm`` que fácilmemte podría ser ``Sequelize`` o cualquier otro tipo de ORM,
Nos permite modelas nuestras tablas en la base de datos,
Nos da acceso al uso de decoradores muy utiles, claves como : ``@Entity`` = Tabla,  ``@Column`` , ``@PrimaryGeneratedColumn``

``Alternativa al gestor de base de datos`` : podriamos interactuar con la base por cli

# Aclaraciones, repasos conceptuales.

ENTITY``.SERVICE``.TS ->  Biblioteca de métodos que se comunica con la base de datos.


# Enlace con la base de datos

Luego de enlazar con la base de datos, en este caso con MySQL y haber definido las entidades (tablas)

Vamos a utilizar @InjectRepository para poder utilizar en nuestro servicios los métodos http brindados por typeOrm.


# Relaciones entre las entidades

- varios gatos a un solo dueńo - un solo dueño con varios gatos

- un gato es amigo de un solo perro . un perro es amigo de un solo gato

- un usuario a muchos posts . muchos posts a un solo usuario

# Autor

- Santiago Neira