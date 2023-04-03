import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Usuario } from 'src/users/entities/user.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: any): Promise<Usuario>  {
    console.log(payload);
    throw new UnauthorizedException("Trabajando en la validación del token");
  }
}