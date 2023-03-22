import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CrearReclamoInput{
    @Field(() => String, {description: 'titulo del reclamo'})
    titulo: string;

    @Field(() => String, {description: 'detalle de compra del reclamo'})
    detalleDeCompra: string;

    @Field(() => String, {description: 'problema del reclamo'})
    problema: string;

}