import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { tbpegawaiDTO } from './pegawai.dto';
import { tbpegawai } from './pegawai.entity';
import { PegawaiService } from './pegawai.service';

@Controller('pegawai')
export class PegawaiController {
    constructor(private PegawaiService: PegawaiService) { }

    @Get() //method get data
    lihatOutput() {
        return this.PegawaiService.showAll();

    }

    @Get(':id') // get data by ida
    lihatDetail(@Param('id') id: string) {
        return this.PegawaiService.read(id);
    }

    @Post() // method kirim data
    createRecord(@Body() data: tbpegawaiDTO) {
        return this.PegawaiService.create(data);
    }

    @Put(':id') // method update data by id 
    updateDetail(@Param('id') id: string, @Body() data: Partial<tbpegawaiDTO>) {
        return this.PegawaiService.update(id, data);
    }

    @Delete(':id') //method delete data
    hapusRecord(@Param('id') id: string) {
        return this.PegawaiService.hapusData(id);
    }
}