import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const CurrentUser =  createParamDecorator(
   (roles = [], context: ExecutionContext) => {

    // 1- obtengo el contexto
    // 2- del contexto obtengo la solicitud
    // 3- de la solicitud obtengo el usuario
    // Error handler ()
    // 4- devuelvo el usuario
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;

    if (!user) {
        throw new InternalServerErrorException("Ningun usuario encontrado en la solicitud - asegurate de que estas usando el AuthGuard (current user decorator problem)");
    }
    //Devuelvo el usuario actual
    return user;
    }
) 