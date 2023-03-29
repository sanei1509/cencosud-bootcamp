import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthResolver, AuthService],
  // quiero utilizar dentro de mi modulo lo que expone el modulo de USUARIOS
  imports: [UsersModule]
})
export class AuthModule {}
