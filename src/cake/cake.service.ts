import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ValidasiCake } from 'src/dto/cakeValidasi';
import { PrismaPostgresService } from 'src/prisma-postgres/prisma-postgres.service';

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
}
