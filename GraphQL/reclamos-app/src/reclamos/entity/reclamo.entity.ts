import { Field, Int, ObjectType } from "@nestjs/graphql";

//Que es un objectType()?
//https://docs.nestjs.com/graphql/resolvers#object-types
@ObjectType()
export class Reclamo {
    @Field(() => Int)
    id: number;

    @Field(() => Int)
    nroReclamo: number;

    @Field(() => String)
    titulo: string;

    // @Field(() => Object)
    // detalleDeCompra: {
    //     formatoCSV: string;
    //     nroFactura: number;
    //     fechaDeCompra: Date;
    //     codigoDeProducto: string;
    // };
    @Field(() => String)
    detalleDeCompra: string;

    @Field(() => String)
    problema: string;

    // relacion al usuario
    // @Field(() => Usuario)
    // usuario: Usuario;

    //relacion al producto
    // @Field(() => Producto)
    // producto: Producto;

}