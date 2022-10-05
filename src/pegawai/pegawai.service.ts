import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbpegawai } from './pegawai.entity';
import { tbpegawaiDTO } from './pegawai.dto';

@Injectable()
export class PegawaiService {
    constructor(@InjectRepository(tbpegawai)
    private pegawaiRepository: Repository<tbpegawai>
    ) { }

    async showAll() { //tampil data
        return await this.pegawaiRepository.find();
    }

    async read(id) {
        return await this.pegawaiRepository.findOne({ where: { id } })
    }

    async create(data: tbpegawaiDTO) {
        const pegawaiNew = await this.pegawaiRepository.create(data);
        await this.pegawaiRepository.save(pegawaiNew);
        return pegawaiNew;
    }

    async update(id, data: Partial<tbpegawaiDTO>) { //method update data
        await this.pegawaiRepository.update({ id }, data);
        return await this.pegawaiRepository.findOne({ where: { id } })
    }

    async hapusData(id) {
        await this.pegawaiRepository.delete({ id });
        return `data id pegawai ${id} telah dihapus`;
    }
}
