import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { tbmahasiswaDTO } from './mahasiswa.dto';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor(private MahasiswaService: MahasiswaService) { }

    @Get() //method ambil data dari service
    lihatOutput() {
        return this.MahasiswaService.showAll();
    }

    @Get(':id') //method ambil data berdasarkan id
    lihatDetail(@Param('id') id: string) {
        return this.MahasiswaService.read(id);
    }

    @Post() // method post data berdasarkan id
    createRecord(@Body() data: tbmahasiswaDTO) {
        return this.MahasiswaService.create(data)
    }


}
