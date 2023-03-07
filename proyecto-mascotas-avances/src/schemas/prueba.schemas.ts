import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PruebaDocument = HydratedDocument<Prueba>;

@Schema()
export class Prueba {
    @Prop()
    id: number;
    @Prop()
    name: string;
}

export const PruebaSchema = SchemaFactory.createForClass(Prueba);