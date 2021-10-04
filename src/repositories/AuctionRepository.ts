import { Document, Model } from 'mongoose';
import { Auction } from '../entities/Auction';
import { IRepository } from './interfaces/IRepository';
import AuctionModel from '../infra/database/models/auction';

class AuctionRepository implements IRepository<Document<Auction>> {
  private auctionModel: Model<Auction>;

  constructor() {
    this.auctionModel = AuctionModel;
  }
  async find(query?: any): Promise<Document<Auction, any, any>[]> {
    return this.auctionModel.find({ ...query });
  }
  async findOne(id: any): Promise<Document<Auction, any, any>> {
    return this.auctionModel.findOne({ _id: id });
  }
  async create(item: Auction): Promise<Document<Auction, any, any>> {
    const result = await this.auctionModel.create(item);
    return result;
  }
  async update(id: any, item: Auction): Promise<Document<Auction, any, any>> {
    await this.auctionModel.updateOne({ _id: id }, item);
    return this.findOne(id);
  }
  async delete(id: any): Promise<boolean> {
    const result = await this.auctionModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}

export { AuctionRepository };
