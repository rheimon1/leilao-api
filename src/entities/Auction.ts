/* eslint-disable import/no-cycle */
import { IsNumber, IsOptional, IsString } from 'class-validator';
import {
  Entity, ObjectIdColumn, ObjectID, Column, ManyToMany, JoinTable,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { IsDate } from 'brazilian-class-validator';
import { User } from './User';

@Entity()
export class Auction {
    @ObjectIdColumn()
    @Exclude()
    _id: ObjectID;

    @Column()
    @IsString({ message: 'O atributo productName deve ser uma string' })
    productName: string;

    @Column()
    @IsNumber({}, { message: 'O atributo startValue deve ser um número' })
    startValue: number;

    @Column()
    @IsDate({ message: 'O atributo startDate deve ser uma data' })
    startDate: Date;

    @Column()
    @IsDate({ message: 'O atributo endDate deve ser uma data' })
    endDate: Date;

    @Column()
    @IsNumber({}, { message: 'O atributo minimumTime deve ser um número' })
    minimumTime: number;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @Expose()
    public get id() {
      return this._id ? this._id.toHexString() : undefined;
    }
}
