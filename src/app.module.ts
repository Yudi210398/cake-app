import { Module } from '@nestjs/common';
import { CakeModule } from './cake/cake.module';

@Module({
  imports: [CakeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
