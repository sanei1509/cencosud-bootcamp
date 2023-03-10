# App Curso de fernando herrera

## Objetivos

- Profundizar y poner en uso conceptos de nest.

## Descripcion del paso a paso, como breve recapitulación

1. crear el proyecto nest
2. crear un crud para los pokemons
3. crear prefijo "API"
4. Correr imagen de la base de datos que vamos a utilizar para la persistencia en DOCKER:
   más especificamente docker-compose, identificando todas nuestras instrucciones aqui:

   file - `docker.compose.yaml`

   ### Lo primero sería abastecer nuestra app con esta base de datos, es sumamente necesario que este corriendo por detras.

   ```
   	version: '3'

   services:
   	db:
   		image: mongo:5
   		restart: always
   		ports:
   			- 27017:27017
   		environment:
   			MONGO_DATABASE: pokemon-app
   		volumes:
   			- ./mongo:/data/db
   ```

## `Importante destacar` podemos tirar abajo el contenedor y como ya almacenamos todo en el file "mongo" todo estaria intacto al correr el mismo docker-compose.

## Luego de tener la base de datos arriba, Resta conectarnos a ella.

# Conexión / Enlace a la base de datos

## Herramientas, Stack Utilizado

- NestJS
- MongoDB
- Table plus (interfaz visual de la base de datos)
- Docker compose
- mongoose

# Autor

- Santiago Neira
