import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaPostgresService } from 'src/prisma-postgres/prisma-postgres.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ValidasiCake } from 'src/dto/cakeValidasi';

@Injectable()
export class CakeService {
  constructor(
    private prismaService: PrismaPostgresService,
    private cloudImage: CloudinaryService,
  ) {}

  async testService(
    cake: ValidasiCake,
    files: Express.Multer.File,
  ): Promise<object> {
    console.log(`skf`);
    const datas = await this.cloudImage.uploadFile(files);
    const data = await this.prismaService.cake.create({
      data: {
        nameCake: cake.namaCake,
        description: cake.description,
        category: cake.category,
        quantity: +cake.quantity,
        image: datas.url,
        price: +cake.price,
      },
    });

    return data;
  }

  async getKue() {
    return await this.prismaService.cake.findMany({});
  }

  async getKuetrue() {
    return await this.prismaService.cake.findMany({
      where: { utama: true },
    });
  }

  async getIdCake(id: number) {
    const datas = await this.prismaService.cake.findUnique({
      where: { id },
    });
    if (!datas) throw new HttpException('Data tidak ada', HttpStatus.FORBIDDEN);
    return datas;
  }
}
