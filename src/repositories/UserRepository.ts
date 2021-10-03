import { Document, Model } from 'mongoose';
import { User } from '../entities/User';
import { IRepository } from './interfaces/IRepository';
import UserModel from '../infra/database/models/user';

class UserRepository implements IRepository<Document<User>> {
  private userModel: Model<User>;

  constructor() {
    this.userModel = UserModel;
  }
  async find(query?: any): Promise<Document<User, any, any>[]> {
    return this.userModel.find({ ...query });
  }
  async findOne(id: any): Promise<Document<User, any, any>> {
    console.log(await this.userModel.findById(id));
    return this.userModel.findOne({ _id: id });
  }
  async create(item: User): Promise<Document<User, any, any>> {
    const result = await this.userModel.create(item);
    return result;
  }
  async update(id: any, item: User): Promise<Document<User, any, any>> {
    await this.userModel.updateOne({ _id: id }, item);
    return this.findOne(id);
  }
  async delete(id: any): Promise<boolean> {
    const result = await this.userModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }

  public async getUserByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}

export { UserRepository };
