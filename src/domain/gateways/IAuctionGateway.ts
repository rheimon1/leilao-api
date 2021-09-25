import { Auction } from '../entities/Auction';

export interface IAuctionGateway {
    add: (auction: IAuctionGateway.AddAuctionParams) => Promise<void>;
    loadAll: () => Promise<IAuctionGateway.LoadAuctionsResult>;
}

export namespace IAuctionGateway {
    export type AddAuctionParams = Omit<Auction, 'id'>
    export type LoadAuctionsResult = Auction[]
}
