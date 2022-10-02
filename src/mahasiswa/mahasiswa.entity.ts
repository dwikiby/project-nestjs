import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tbmahasiswa {

    //primary
    @PrimaryGeneratedColumn()
    id: number;

    //Kolom nim
    @Column()
    nim: number;

    //Kolom nama
    @Column()
    nama: string;

    //Kolom alamat
    @Column('text')
    alamat: string;

    //Kolom jurusan
    @Column('text')
    jurusan: string;

    //Kolom tahun angkatan
    @Column()
    angkatan: number;
}