import { Body, Controller, Get, Param, Post, Put, Delete, Render } from '@nestjs/common';
import { tbmahasiswaDTO } from './mahasiswa.dto';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor(private MahasiswaService: MahasiswaService) { }

    @Get('jsondata') //method ambil data dari service
    async lihatOutput() {
        return { data: await this.MahasiswaService.showAll() };
    }

    @Get()
    @Render('mahasiswa/index') //lokasi mahasiswa.hbs
    root() {
        return {
            message: 'Hello world!',
            title: 'Index mahasiswa',
        };
    }

    @Get(':id') //method ambil data berdasarkan id
    lihatDetail(@Param('id') id: string) {
        return this.MahasiswaService.read(id);
    }

    @Post() // method post data berdasarkan id
    createRecord(@Body() data: tbmahasiswaDTO) {
        return this.MahasiswaService.create(data)
    }

    @Put(':id') // method update data by id
    updateDetail(@Param('id') id: string, @Body() data: Partial<tbmahasiswaDTO>) {
        return this.MahasiswaService.update(id, data);
    }

    @Delete(':id') //method delete data
    hapusRecord(@Param('id') id: string) {
        return this.MahasiswaService.hapusData(id);
    }



}
