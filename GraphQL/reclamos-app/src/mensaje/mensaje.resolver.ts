import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MensajeResolver {
    // Query de mensaje de prueba
    @Query(() => String, { description: "mensaje comprobante de funcionamiento graphql", name: "mensaje" })
    mensaje(): string {
        return "Saludo desde el resolver de graphql"
    }

    // Query de retorno numero aleatorio del 1 al 10
    @Query(() => Int, { description: "numero aleatorio del 1 al 10", name: "numeroAleatorio" })
    getNumeroAleatorio(): number {
        return Math.floor(Math.random() * 10.2) + 1;
    }

    //Obtener numero variable
    @Query(() => Int, { description: "numero variable", name: "numeroVariable" })
    getNumberHasta( @Args("limitNumber", {type: () => Int}) limitNumber: number ): number {
        return Math.floor(Math.random() * limitNumber)
    }

    //Obtener reclamos
    @Query(() => [String], { description: "reclamos", name: "reclamos" })
    getReclamos(): string[] {

        return ["reclamo 1", "reclamo 2", "reclamo 3"]
    }
    
}
