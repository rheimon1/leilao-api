import { AuctionRepository } from '../repositories/AuctionRepository';

export class AuctionService {
  private auctionRepository: AuctionRepository;

  constructor() {
    this.auctionRepository = new AuctionRepository();
  }

  public async createAuction(data: any) {
    return this.auctionRepository.create(data);
  }

  public async getAllAuctions() {
    return this.auctionRepository.find();
  }

  public async getAuctionById(id: any) {
    return this.auctionRepository.findOne(id);
  }

  public async updateAuction(id: any, data: any) {
    return this.auctionRepository.update(id, data);
  }

  public async deleteAuction(id: any) {
    return this.auctionRepository.delete(id);
  }
}
