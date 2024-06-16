import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CakeService } from './cake.service';
import { ValidasiCake } from 'src/dto/cakeValidasi';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cake')
export class CakeController {
  constructor(private serviceCake: CakeService) {}

  @Post('test')
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('image'))
  async createCake(
    @UploadedFile(new ParseFilePipe({})) file: Express.Multer.File,
    @Body() cakeData: ValidasiCake,
  ) {
    const gambar = file.mimetype;
    if (gambar === 'image/png' || gambar === 'image/jpeg')
      return await this.serviceCake.testService(cakeData, file);

    throw new HttpException(
      'Harus Gambar png atau jpeg ',
      HttpStatus.FORBIDDEN,
    );
  }

  @Get()
  async getData() {
    if ((await this.serviceCake.getKue()).length === 0)
      throw new HttpException('Data tidak ada', HttpStatus.FORBIDDEN);
    return await this.serviceCake.getKue();
  }
}
