import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    cors({
      origin: 'http://localhost:5173', // Mengizinkan origin tertentu
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Mengizinkan method tertentu
      credentials: true, // Mengizinkan pengiriman cookie atau kredensial
    }),
  );


  await app.listen(3100);
}
bootstrap();
