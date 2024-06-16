import { Module } from '@nestjs/common';
import { CakeController } from './cake.controller';
import { CakeService } from './cake.service';

import { PrismaPostgresModule } from 'src/prisma-postgres/prisma-postgres.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [CakeController],
  providers: [CakeService],
  imports: [PrismaPostgresModule, CloudinaryModule],
})
export class CakeModule {}
