import { Module } from '@nestjs/common';
import { CakeModule } from './cake/cake.module';
import { PrismaPostgresModule } from './prisma-postgres/prisma-postgres.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CakeModule,
    PrismaPostgresModule,
    CloudinaryModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
