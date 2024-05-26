import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CakeService } from './cake.service';
import { ValidasiCake } from 'src/dto/cakeValidasi';

@Controller('cake')
export class CakeController {
  constructor(private serviceCake: CakeService) {}

  @Post('test')
  @UsePipes(ValidationPipe)
  async createCake(@Body() cakeData: ValidasiCake) {
    return await this.serviceCake.testService(cakeData);
  }
}
