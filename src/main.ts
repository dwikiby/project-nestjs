import 'dotenv/config'; // import file env

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const port = process.env.PORT;  // konfigurasi port ke file env

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  await app.listen(port); //pengaturan port 

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
}

Logger.log(`Server jalan di port ${port}`, 'Running Port'); //Menampilkan log di terminal
bootstrap();
