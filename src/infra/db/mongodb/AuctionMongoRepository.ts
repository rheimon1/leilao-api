import { IAuctionRepository } from '../../../repositories/IAuctionRepository';
import { Auction } from '../../../domain/entities/Auction';

export class AuctionMongoRepository implements IAuctionRepository {
  async add(data: IAuctionRepository.AddParams): Promise<boolean> {
    const newAuction = {

    };
    const auction = new Auction();
  }

  async loadAll(): Promise<IAuctionRepository.LoadAllResult> {
    const auctions = await Auction.find();
    return auctions;
  }
}
