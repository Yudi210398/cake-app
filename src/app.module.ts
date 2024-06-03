import { Module } from '@nestjs/common';
import { CakeModule } from './cake/cake.module';
import { PrismaPostgresModule } from './prisma-postgres/prisma-postgres.module';

@Module({
  imports: [CakeModule, PrismaPostgresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
