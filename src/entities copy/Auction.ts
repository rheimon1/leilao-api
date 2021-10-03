/* eslint-disable import/no-cycle */
import { Document } from 'mongoose';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { IsDate } from 'brazilian-class-validator';
import { User } from './User';

export class Auction extends Document {
    @IsString({ message: 'O atributo productName deve ser uma string' })
    productName: string;

    @IsNumber({}, { message: 'O atributo startValue deve ser um número' })
    startValue: number;

    @IsDate({ message: 'O atributo startDate deve ser uma data' })
    startDate: Date;

    @IsDate({ message: 'O atributo endDate deve ser uma data' })
    endDate: Date;

    @IsNumber({}, { message: 'O atributo minimumTime deve ser um número' })
    minimumTime: number;

    users: User[];

  // constructor(
  //   productName: string,
  //   startValue: number,
  //   startDate: Date,
  //   endDate: Date,
  //   minimumTime: number,
  //   users?: User[],
  // ) {
  //   this.productName = productName;
  //   this.startValue = startValue;
  //   this.startDate = startDate;
  //   this.endDate = endDate;
  //   this.minimumTime = minimumTime;
  //   this.users = users;
  // }
}
