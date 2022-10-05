import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tbpegawai {

    //primary
    @PrimaryGeneratedColumn()
    id: number;

    //Kolom nama
    @Column()
    nama: string;

    //Kolom email
    @Column()
    email: string;

    //Kolom no hp
    @Column()
    phone_number: number;

    //Kolom status
    @Column()
    status: string;

}