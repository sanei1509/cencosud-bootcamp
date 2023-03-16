import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MensajeResolver {
    @Query(() => String, {description: "mensaje comprobante de funcionamiento graphql", name: "mensaje pruebas"})
    mensaje(): string {
        return "Saludo desde el resolver de graphql"
    }
}
