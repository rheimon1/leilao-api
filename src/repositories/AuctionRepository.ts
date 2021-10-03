import { EntityRepository, Repository } from 'typeorm';
import { Auction } from '../entities/Auction';

@EntityRepository(Auction)
class AuctionRepository extends Repository<Auction> {}

export { AuctionRepository };
