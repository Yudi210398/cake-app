import { Injectable } from '@nestjs/common';
import { ValidasiCake } from 'src/dto/cakeValidasi';
import { PrismaPostgresService } from 'src/prisma-postgres/prisma-postgres.service';

@Injectable()
export class CakeService {
  constructor(private prismaService: PrismaPostgresService) {}

  async testService(cake: ValidasiCake): Promise<object> {
    const data = await this.prismaService.cake.create({
      data: {
        nameCake: cake.namaCake,
        description: cake.description,
        category: cake.category,
        quantity: cake.quantity,
        image: cake.image,
        price: cake.price,
      },
    });

    return data;
  }
}
