import { Injectable } from '@nestjs/common';
import { ValidasiCake } from 'src/dto/cakeValidasi';

@Injectable()
export class CakeService {
  testService(cake: ValidasiCake): string {
    console.log(cake, `caks`);
    return `kue ${cake.namaCake}`;
  }
}
