/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({ type: 'date' })
    created: Date;

    @UpdateDateColumn({ type: 'date' })
    updated: Date;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    image: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ default: 'spanish' })
    language: string;

    @Column()
    password: string;

    @Column('boolean', { default: true })
    status: boolean;
}
