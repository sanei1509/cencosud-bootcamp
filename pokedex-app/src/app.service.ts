import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Metodo que retorna uma string
  getHello(): string {
    return 'Hello World!';
  }
}
