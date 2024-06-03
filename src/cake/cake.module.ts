import { Module } from '@nestjs/common';
import { CakeController } from './cake.controller';
import { CakeService } from './cake.service';

import { PrismaPostgresModule } from 'src/prisma-postgres/prisma-postgres.module';

@Module({
  controllers: [CakeController],
  providers: [CakeService],
  imports: [PrismaPostgresModule],
})
export class CakeModule {}
