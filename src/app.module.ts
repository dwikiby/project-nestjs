import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { tbmahasiswa } from './mahasiswa/mahasiswa.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  // imports: [],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [TypeOrmModule.forRoot(
    { //konfigurasi koneksi database
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [tbmahasiswa],
      logging: true,
      dropSchema: false,
      synchronize: true,

    }
  ), MahasiswaModule],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
})
export class AppModule { }
