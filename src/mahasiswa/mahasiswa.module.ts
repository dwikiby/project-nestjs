import { Module } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaController } from './mahasiswa.controller';
import { tbmahasiswa } from './mahasiswa.entity'; //import tbmahasiswa dari entity
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
    imports: [TypeOrmModule.forFeature([tbmahasiswa])],
    providers: [MahasiswaService],
    controllers: [MahasiswaController]
})
export class MahasiswaModule { }
