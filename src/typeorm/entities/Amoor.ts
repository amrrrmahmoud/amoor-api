import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'amoor'})
export class Amoor{
    @PrimaryColumn()
    id: string

    @Column()
    coolLevel: number
} 