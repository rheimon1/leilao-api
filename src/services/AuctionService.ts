import { getMongoRepository, MongoRepository } from 'typeorm';
import { Auction } from '../entities/Auction';
import Service from './Service';

export class AuctionService extends Service<Auction> {
  private auctionRepository: MongoRepository<Auction>;

  constructor() {
    super(Auction);
    this.auctionRepository = getMongoRepository(Auction);
  }

  public async createAuction(data: any) {
    return this.create(data);
  }

  public async getAllAuctions() {
    return this.list();
  }

  public async getAuctionById(id: any) {
    return this.getById(id);
  }

  public async updateAuction(id: any, data: any) {
    return this.update(id, data);
  }

  public async deleteAuction(id: any) {
    return this.delete(id);
  }
}
