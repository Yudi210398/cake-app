import { Injectable } from '@nestjs/common';
import { ValidasiCake } from 'src/dto/cakeValidasi';
import { PrismaPostgresService } from 'src/prisma-postgres/prisma-postgres.service';

@Injectable()
export class CakeService {
  constructor(private prismaService: PrismaPostgresService) {}

  async testService(cake: ValidasiCake): Promise<string> {
    return `kue ${cake.namaCake}`;
  }
}
