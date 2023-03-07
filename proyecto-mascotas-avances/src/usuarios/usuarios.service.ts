import { Injectable } from '@nestjs/common';
import { UserDto } from './dto.usuario';

@Injectable()
export class UsuariosService {
    private usuarios: UserDto[] = [
        {
            id: 1,
            fullname: 'Juan Perez',
            username: 'juanperez12'
        }
    ]
}
