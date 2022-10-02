import 'dotenv/config'; // import file env

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT;  // konfigurasi port ke file env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

Logger.log(`Server jalan di port ${port}`, 'Running Port'); //Menampilkan log di terminal
bootstrap();
