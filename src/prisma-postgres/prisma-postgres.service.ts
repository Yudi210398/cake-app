import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaPostgresService
  extends PrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect()
      .then(() => console.log(`konek database`))
      .catch((err) => console.log(err));
  }
}