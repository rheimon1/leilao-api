/* eslint-disable import/no-cycle */
import {
  IsEmail, IsNotEmpty, IsOptional, IsString, Length,
} from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';
import {
  Entity, ObjectIdColumn, ObjectID, Column, ManyToMany, JoinTable, Unique, Index, BeforeInsert,
} from 'typeorm';
import {
  classToPlain, Exclude, Expose, Transform,
} from 'class-transformer';
import { Auction } from './Auction';

@Entity({ name: 'users' })
export class User {
    @ObjectIdColumn()
    @Exclude()
    _id: ObjectID;

    @Column()
    @Expose()
    @IsString({ message: 'O atributo name deve ser uma string' })
    name: string;

    @Column()
    @Expose()
    @IsEmail({}, { message: 'O atributo email está inválido' })
    @IsString({ message: 'O atributo email deve ser uma string' })
    email: string;

    @Column()
    @Expose()
    @IsNotEmpty()
    @IsCPF({ message: 'O atributo cpf está inválido' })
    @IsString({ message: 'O atributo cpf deve ser uma string' })
    cpf: string;

    @Column({ select: false })
    @Expose({ toPlainOnly: true })
    @Exclude({ toPlainOnly: true })
    @Length(6, undefined, { message: 'O atributo password precisa ter pelo menos 6 dígitos' })
    password: string;

    @Column()
    @Expose()
    @IsString({ message: 'O atributo address deve ser uma string' })
    address: string

    @ManyToMany(() => Auction)
    @JoinTable()
    auctions: Auction[]

    @Expose()
    public get id() {
      return this._id ? this._id.toHexString() : undefined;
    }
}
