import { Module } from '@nestjs/common';
import { CareerModule } from './career/career.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/gestion-de-carreras'),
    CareerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
