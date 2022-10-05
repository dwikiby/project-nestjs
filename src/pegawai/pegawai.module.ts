import { Module } from '@nestjs/common';
import { tbpegawai } from './pegawai.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PegawaiController } from './pegawai.controller';
import { PegawaiService } from './pegawai.service';

@Module({
    imports: [TypeOrmModule.forFeature([tbpegawai])],
    controllers: [PegawaiController],
    providers: [PegawaiService],
})
export class PegawaiModule { }
