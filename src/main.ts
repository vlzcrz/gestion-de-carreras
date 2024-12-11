import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['Career', 'Subject'],
        protoPath: [
          join(__dirname, 'proto/career.proto'),
          join(__dirname, 'proto/subject.proto'),
        ],
        url: 'localhost:5001',
      },
    },
  );
  await app.listen();
}
bootstrap();
