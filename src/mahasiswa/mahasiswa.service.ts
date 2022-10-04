import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbmahasiswa } from './mahasiswa.entity';
import { tbmahasiswaDTO } from './mahasiswa.dto';


@Injectable()
export class MahasiswaService {
    constructor(@InjectRepository(tbmahasiswa)
    private mahasiswaRepository: Repository<tbmahasiswa>
    ) { }

    async showAll() { //tampilkan semua data di tabel mahasiswa
        return await this.mahasiswaRepository.find();
    }

    async read(id) { //method get data by id
        return await this.mahasiswaRepository.findOne({ where: { id } })
    }

    async create(data: tbmahasiswaDTO) { // method post data ke tabel mahasiswa
        const mahasiswaNew = await this.mahasiswaRepository.create(data);
        await this.mahasiswaRepository.save(mahasiswaNew)
        return mahasiswaNew;
    }

    async update(id, data: Partial<tbmahasiswaDTO>) { //method update data by id
        await this.mahasiswaRepository.update({ id }, data);
        return await this.mahasiswaRepository.findOne({ where: { id } })
    }

    async hapusData(id) {
        await this.mahasiswaRepository.delete({ id });
        return `data id : ${id} has been deleted : true`
    }

    async lihatSemua() {
        return 'ini adalah service';
    }
}
