/* eslint-disable import/no-cycle */
import { Document } from 'mongoose';
import {
  IsEmail, IsNotEmpty, IsOptional, IsString, Length,
} from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';
import {
  classToPlain, Exclude, Expose, Transform,
} from 'class-transformer';
import { Auction } from './Auction';

export default class User extends Document {
    @Expose()
    @IsString({ message: 'O atributo name deve ser uma string' })
    name: string;

    @Expose()
    @IsEmail({}, { message: 'O atributo email está inválido' })
    @IsString({ message: 'O atributo email deve ser uma string' })
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsCPF({ message: 'O atributo cpf está inválido' })
    @IsString({ message: 'O atributo cpf deve ser uma string' })
    cpf: string;

    @Expose({ toPlainOnly: true })
    @Exclude({ toPlainOnly: true })
    @Length(6, undefined, { message: 'O atributo password precisa ter pelo menos 6 dígitos' })
    password: string;

    @Expose()
    @IsString({ message: 'O atributo address deve ser uma string' })
    address: string

    auctions: Auction[]

  // constructor(
  //   name: string,
  //   email: string,
  //   cpf: string,
  //   password: string,
  //   address: string,
  //   auctions?: Auction[],
  // ) {
  //   this.name = name;
  //   this.email = email;
  //   this.cpf = cpf;
  //   this.password = password;
  //   this.address = address;
  //   this.auctions = auctions;
  // }
}
